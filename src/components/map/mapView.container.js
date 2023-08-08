import MapViewUI from "./mapView.presenter";
import dongGeojson from "../../../public/coords.json";
import seoulGeojson from "../../../public/seoul.json";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

const MapView = ({ isDongFind }) => {
    let barRef = useRef(null);
    let headerRef = useRef(null);
    let menuBtnRef = useRef(null);
    let sideBarRef = useRef(null);
    let waitBoxRef = useRef(null);
    let infraBtnRef = useRef([]); // 버튼 배경색, 글자색 바꿀 변수

    // 버튼 클릭 여부
    let clickCnt = useRef([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    // useRef 여러 개 배열로 관리할 때 시설 종류 순서
    const typeName = ["lib", "park", "mar", "kid", "hos", "swim", "reh", "old", "col"];

    // 공공데이터에서 받아오는 정리안된 초기 데이터 변수
    const [data, setData] = useState({
        hos: [],
        lib: [],
        park: [],
        swim: [],
        col: [],
        mar: [],
        reh: [],
        old: [],
        kid: [],
    });

    // 공공데이터에서 받아온 초기 데이터를 정리해서 시설이름, 구이름, 동이름, 좌표 넣어줄 변수
    const [dataInfo, setDataInfo] = useState({
        hos: [],
        lib: [],
        park: [],
        swim: [],
        col: [],
        mar: [],
        reh: [],
        old: [],
        kid: [],
    });

    // map 컴포넌트 넣어줄 변수
    const [map, setMap] = useState(null);

    // (1) 동찾기 페이지라면, 서울시 동 폴리곤 그리기 위해
    // 각 동의 폴리곤좌표, 동이름, 마우스오버여부 넣어줄 변수
    // (2) 인프라찾기 페이지라면, 서울시 폴리곤 그리기 위해 서울시 폴리곤 좌표 넣어줄 변수
    const [polygonInfo, setPolygonInfo] = useState([]);

    // 빨갛게 표시할 동의 폴리곤 정보 넣어줄 변수
    const [selectedDong, setSelectedDong] = useState([]);

    // 클릭된 시설 종류 넣어줄 변수
    const [selectedType, setSelectedType] = useState([]);

    // 로딩 창 띄우고 없애기 위한 변수
    const [display, setDisplay] = useState("");

    // 동 위에 마우스 커서 올렸을 때 동이름 나오도록
    // 커서를 움직일 때마다의 커서 위치 넣어줄 변수
    const [mousePosition, setMousePosition] = useState({ lat: 0, lng: 0 });

    // 각 시설의 주소 및 시설명의 key 값
    const keyName = {
        hos: { addrKey: "DUTYADDR", nameKey: "DUTYNAME" },
        lib: { addrKey: "ADRES", nameKey: "LBRRY_NAME" },
        park: { addrKey: "P_ADDR", nameKey: "P_PARK" },
        swim: { addrKey: "SITEWHLADDR", nameKey: "BPLCNM" },
        col: { addrKey: "ADD_KOR", nameKey: "NAME_KOR" },
        mar: { addrKey: "ITEM_ADDR", nameKey: "ITEM_NM" },
        reh: { addrKey: "FCLT_ADDR", nameKey: "FCLT_NM" },
        old: { addrKey: "FCLT_ADDR", nameKey: "FCLT_NM" },
        kid: { addrKey: "BASS_ADRES", nameKey: "FCLTY_NM" },
    };

    // 카테고리 리스트
    const categoryList = [
        { title: "문화시설", infraList: ["도서관", "공원", "전통시장", "키즈카페"], plusNum: 0 },
        { title: "의료시설", infraList: ["응급실"], plusNum: 4 },
        { title: "체육시설", infraList: ["수영장"], plusNum: 5 },
        { title: "복지시설", infraList: ["재활센터", "노인복지관"], plusNum: 6 },
        { title: "교육시설", infraList: ["대학교"], plusNum: 8 },
    ];

    // 마커 생성 시 각 이미지 경로
    const markerSrc = {
        hos: "/hospital_marker.png",
        lib: "/library_marker.png",
        park: "/park_marker.png",
        swim: "/swim_marker.png",
        col: "/college_marker.png",
        mar: "/market_marker.png",
        reh: "/reh_marker.png",
        old: "/old_marker.png",
        kid: "/kids_marker.png",
    };

    // 데이터 요청
    useEffect(() => {
        axios
            .all([
                axios.get(`http://openapi.seoul.go.kr:8088/576e61714e636a6b3637545a455046/json/TvEmgcHospitalInfo/1/500/`),
                axios.get(`http://openapi.seoul.go.kr:8088/4f49455041636a6b37376d485a5255/json/SeoulPublicLibraryInfo/1/500/`),
                axios.get(`http://openAPI.seoul.go.kr:8088/6258655663626f623130365855576c6d/json/SearchParkInfoService/1/500/`),
                axios.get(`http://openapi.seoul.go.kr:8088/4b56466d77626f6234384444716670/json/LOCALDATA_103501/1/500/`),
                axios.get(`http://openapi.seoul.go.kr:8088/4643455575626f623933496f444f53/json/SebcCollegeInfoKor/1/500/`),
                axios.get(`http://openAPI.seoul.go.kr:8088/4f46506f71626f6231366262796977/json/ListTraditionalMarket/1/500/`),
                axios.get(`http://openapi.seoul.go.kr:8088/494b465849626f6236316e786c4f57/json/fcltOpenInfo_OMSI/1/500/`),
                axios.get(`http://openapi.seoul.go.kr:8088/5945797941626f623930564f595467/json/fcltOpenInfo_OWI/1/500/`),
                axios.get(`http://openapi.seoul.go.kr:8088/6851706553626f623130307049427043/json/tnFcltySttusInfo1011/1/500/`),
            ])
            .then(
                axios.spread((hos, lib, park, swim, col, mar, reh, old, kid) => {
                    setData({
                        hos: hos.data.TvEmgcHospitalInfo.row,
                        lib: lib.data.SeoulPublicLibraryInfo.row,
                        park: park.data.SearchParkInfoService.row,
                        swim: swim.data.LOCALDATA_103501.row,
                        col: col.data.SebcCollegeInfoKor.row,
                        mar: mar.data.ListTraditionalMarket.row,
                        reh: reh.data.fcltOpenInfo_OMSI.row,
                        old: old.data.fcltOpenInfo_OWI.row,
                        kid: kid.data.tnFcltySttusInfo1011.row,
                    });
                })
            )
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // (1) 동찾기 페이지라면, 서울시 동 폴리곤 그리기 위해 json 파일 데이터들의
    // 폴리곤 좌표(positions), 동 이름(dongName), 마우스오버 여부(isMouseOver)를 객체 형태로 polygonInfo 배열에 저장
    // (2) 인프라찾기 페이지라면, 서울시 폴리곤 그리기 위해 json 파일의 좌표들을 객체 형태로 polygonInfo 배열에 저장
    useEffect(() => {
        if (isDongFind) {
            const data = dongGeojson.features; // 각 동의 폴리곤 좌표 및 이름 정보 등이 객체 형태로 담긴 배열
            let dongContents = []; // 각각의 동 정보(좌표, 동이름, 마우스오버)를 객체 형태로 넣어줄 배열

            data.forEach((dong) => {
                let content = {}; // dongContents에 넣어줄 각 동 정보 객체
                content.dongName = dong.properties.EMD_NM; // 동 이름
                content.positions = []; // 폴리곤 좌표
                content.isMouseOver = false; // 마우스 오버 이벤트 여부

                const coordinates = dong.geometry.coordinates[0]; // 폴리곤 좌표들 담긴 배열

                coordinates.forEach((coord) => {
                    // 동의 각 폴리곤 좌표를 content.positions에 객체 형태로 넣어줌
                    content.positions.push({ lat: coord[1], lng: coord[0] });
                });

                dongContents.push(content);
            });

            setPolygonInfo(dongContents);
        } else {
            const data = seoulGeojson.features[0].geometry.coordinates[0];

            let contents = [];

            data.forEach((coord) => {
                contents.push({ lat: coord[1], lng: coord[0] });
            });

            setPolygonInfo(contents);
        }
    }, []);

    // 로딩 창 띄우기
    useEffect(() => {
        if (!map) return;

        if (display === "block") {
            waitBoxRef.current.style.display = "block";
        } else {
            waitBoxRef.current.style.display = "none";
        }
    }, [display]);

    // 주소로 좌표 검색 요청하여 시설이름, 구이름, 동이름, 좌표를 info 배열에 객체로 담아주기
    const axiosFunc = async (elem, addrKey, nameKey, info) => {
        let infoContent = {};

        if (elem[addrKey]) {
            let res = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${elem[addrKey]}`, {
                headers: {
                    Authorization: "KakaoAK c810d1096c3f50297a4f3e8323afece5",
                },
            });

            const location = res.data.documents[0];

            if (location) {
                infoContent.infraName = elem[nameKey];
                infoContent.position = { lat: parseFloat(location.y), lng: parseFloat(location.x) };

                if (location.address) {
                    infoContent.guName = location.address.region_2depth_name;
                    infoContent.dongName = location.address.region_3depth_name;
                } else {
                    infoContent.guName = location.road_address.region_2depth_name;
                    infoContent.dongName = location.road_address.region_3depth_name;
                }

                info.push(infoContent);
            }
        }
    };

    // 주소로 좌표 검색 요청 시 한 번에 많이 요청하면 429 에러 발생하므로
    // 1초 정도 간격 두고 100개씩 나눠서 요청하여 정보를 해당Info 배열에 담아주기
    const arrFunc = (data, addrKey, nameKey, type) => {
        let info = [];
        let dataLen = data.length;
        let iLen = Math.floor(dataLen / 100);

        for (let i = 0; i < iLen; i++) {
            for (let j = i * 100; j < (i + 1) * 100; j++) {
                setTimeout(() => axiosFunc(data[j], addrKey, nameKey, info), i * 1000);
            }
        }
        for (let i = iLen * 100; i < dataLen; i++) {
            setTimeout(() => axiosFunc(data[i], addrKey, nameKey, info), iLen * 1000);
        }

        setTimeout(
            () =>
                setDataInfo({
                    ...dataInfo,
                    [type]: info,
                }),
            (iLen + 1) * 1000
        );

        setTimeout(() => setDisplay("none"), (iLen + 1) * 1000);
    };

    // 인프라시설 버튼 클릭
    const infraBtnClick = (typeIdx) => {
        // cnt가 0인 경우(버튼이 클릭 안된 경우)
        if (!clickCnt.current[typeIdx]) {
            // 최초 클릭인 경우
            if (!dataInfo[typeName[typeIdx]].length) {
                setDisplay("block");

                // 클릭한 인프라의 정보를 해당Info 배열에 담아주기
                arrFunc(
                    data[typeName[typeIdx]],
                    keyName[typeName[typeIdx]].addrKey,
                    keyName[typeName[typeIdx]].nameKey,
                    typeName[typeIdx]
                );
            }

            // 버튼 배경색, 글자색 변경
            infraBtnRef.current[typeIdx].style.backgroundColor = "#756bff";
            infraBtnRef.current[typeIdx].style.color = "white";
            infraBtnRef.current[typeIdx].style.boxShadow = "2px 3px 1px 0px rgb(26 26 26 / 19%) inset";

            // cnt -> 1
            clickCnt.current[typeIdx]++;

            // selectedType 배열에 선택한 type 넣기
            setSelectedType((prevSelectedType) => {
                if (!prevSelectedType.length) {
                    return [typeName[typeIdx]];
                } else {
                    return [...prevSelectedType, typeName[typeIdx]];
                }
            });
        } else {
            // 버튼 배경색, 글자색 변경
            infraBtnRef.current[typeIdx].style.backgroundColor = "white";
            infraBtnRef.current[typeIdx].style.color = "#333";
            infraBtnRef.current[typeIdx].style.boxShadow = "2px 2px 1px 0px rgb(137 137 137 / 19%)";

            // cnt -> 0
            clickCnt.current[typeIdx]--;

            // selectedType 배열에서 type 빼주기
            setSelectedType((prevSelectedType) => {
                return prevSelectedType.filter((t) => t !== typeName[typeIdx]);
            });
        }
    };

    // 검색하기 버튼 클릭
    const searchBtnClick = () => {
        let filteredDong = [];

        if (selectedType) {
            selectedType.forEach((type, idx) => {
                // 첫 번째로 클릭된 인프라의 경우
                if (idx === 0) {
                    dataInfo[type].forEach((infraInfo) => {
                        polygonInfo.forEach((dInfo) => {
                            if (infraInfo.dongName.includes(dInfo.dongName)) {
                                filteredDong.push(dInfo);
                            }
                        });
                    });

                    filteredDong = [...new Set(filteredDong)];
                } else {
                    // 두 번째 이후부터 클릭된 인프라의 경우
                    let temp = [];
                    dataInfo[type].forEach((infraInfo) => {
                        filteredDong.forEach((dInfo) => {
                            if (infraInfo.dongName.includes(dInfo.dongName)) {
                                temp.push(dInfo);
                            }
                        });
                    });

                    temp = [...new Set(temp)];
                    filteredDong = temp;
                }
            });
        }

        setSelectedDong(filteredDong);
    };

    // 헤더 마우스 오버 / 마우스 아웃
    const headerShowCtrl = (isMouseOver) => {
        headerRef.current.style.transform = isMouseOver ? "translateY(0)" : "translateY(-60px)";
        barRef.current.style.visibility = isMouseOver ? "hidden" : "visible";
        barRef.current.style.transitionDelay = isMouseOver ? "0ms" : "300ms";
    };

    // 사이드바 열기 / 닫기
    const sideBarShowCtrl = (isMenuBtnCliked) => {
        sideBarRef.current.style.transform = isMenuBtnCliked ? "translateX(0)" : "translateX(-350px)";
        menuBtnRef.current.style.visibility = isMenuBtnCliked ? "hidden" : "visible";
        menuBtnRef.current.style.transitionDelay = isMenuBtnCliked ? "0ms" : "1000ms";
    };

    // 버튼 색 마우스 오버 / 마우스 아웃
    const infraBtnColorCtrl = (e, cnt, isMouseOver) => {
        // 버튼이 클릭되어 있지 않다면
        if (!cnt) {
            e.target.style.backgroundColor = isMouseOver ? "#756bff" : "white";
            e.target.style.color = isMouseOver ? "white" : "#333";
        }
    };

    const check = () => {
        console.log(polygonInfo);
        console.log(selectedType);
        console.log(dataInfo);
    };

    return (
        <MapViewUI
            isDongFind={isDongFind}
            barRef={barRef}
            headerRef={headerRef}
            menuBtnRef={menuBtnRef}
            sideBarRef={sideBarRef}
            waitBoxRef={waitBoxRef}
            infraBtnRef={infraBtnRef}
            clickCnt={clickCnt}
            dataInfo={dataInfo}
            polygonInfo={polygonInfo}
            selectedDong={selectedDong}
            selectedType={selectedType}
            mousePosition={mousePosition}
            categoryList={categoryList}
            markerSrc={markerSrc}
            setMap={setMap}
            setMousePosition={setMousePosition}
            infraBtnClick={infraBtnClick}
            searchBtnClick={searchBtnClick}
            headerShowCtrl={headerShowCtrl}
            sideBarShowCtrl={sideBarShowCtrl}
            infraBtnColorCtrl={infraBtnColorCtrl}
            check={check}
        />
    );
};

export default MapView;
