import MapHeader from "@/components/common/mapHeader";
import { Spin } from "antd";
import { CgMenuRound } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
import { CustomOverlayMap, Map, Polygon } from "react-kakao-maps-sdk";
import CategoryBox from "./categoryBox";
import {
    Bar,
    CateTitle,
    Category,
    CloseBtn,
    Container,
    DivArea,
    HeaderWrap,
    Infra,
    MapWrap,
    MenuBtn,
    Search,
    SideBar,
    SideWrap,
    WaitBox,
} from "@/styles/map1.styles";

const MapViewUI = (props) => {
    const {
        barRef,
        headerRef,
        menuBtnRef,
        sideBarRef,
        waitBoxRef,
        infraBtnRef,
        clickCnt,
        dongInfo,
        selectedDong,
        mousePosition,
        setMap,
        setMousePosition,
        infraBtnClick,
        searchBtnClick,
        headerMouseOver,
        headerMouseout,
        sideBarOpen,
        sideBarClose,
        handleMouseOver,
        handleMouseOut,
        check,
    } = props;

    // 카테고리 리스트
    const categoryList = [
        { title: "문화시설", infraList: ["도서관", "공원", "전통시장", "키즈카페"], plusNum: 0 },
        { title: "의료시설", infraList: ["응급실"], plusNum: 4 },
        { title: "체육시설", infraList: ["수영장"], plusNum: 5 },
        { title: "복지시설", infraList: ["재활센터", "노인복지관"], plusNum: 6 },
        { title: "교육시설", infraList: ["대학교"], plusNum: 8 },
    ];

    return (
        <Container>
            <MapWrap>
                <HeaderWrap onMouseOver={headerMouseOver} onMouseOut={headerMouseout}>
                    <Bar ref={barRef}></Bar>
                    <MapHeader ref={headerRef}></MapHeader>
                </HeaderWrap>

                <SideWrap>
                    <MenuBtn ref={menuBtnRef} onClick={sideBarOpen}>
                        <CgMenuRound size="30" color="#004c80" />
                    </MenuBtn>

                    <SideBar ref={sideBarRef}>
                        <CloseBtn onClick={sideBarClose}>
                            <IoMdCloseCircle size="20" />
                        </CloseBtn>

                        {categoryList.map((category, idx) => (
                            <CategoryBox
                                key={idx}
                                title={category.title}
                                infraList={category.infraList}
                                plusNum={category.plusNum}
                                clickCnt={clickCnt}
                                infraBtnRef={infraBtnRef}
                                infraBtnClick={infraBtnClick}
                                handleMouseOver={handleMouseOver}
                                handleMouseOut={handleMouseOut}
                            />
                        ))}

                        <Search onClick={searchBtnClick}>검색</Search>
                        <Search onClick={check}>확인</Search>
                    </SideBar>
                </SideWrap>

                <Map
                    id={`map`}
                    center={{
                        lat: 37.566826,
                        lng: 126.9786567,
                    }}
                    style={{
                        width: "100%",
                        height: "100vh",
                        position: "absolute",
                    }}
                    level={9}
                    maxLevel={9}
                    onCreate={setMap}
                    onMouseMove={(_map, mouseEvent) =>
                        setMousePosition({
                            lat: mouseEvent.latLng.getLat(),
                            lng: mouseEvent.latLng.getLng(),
                        })
                    }
                >
                    {dongInfo.map((info, idx) => (
                        <Polygon
                            key={idx}
                            path={info.positions} // 그려질 다각형의 좌표 배열
                            strokeWeight={2} // 선의 두께
                            strokeColor={"#004c80"} // 선의 색깔
                            strokeOpacity={0.8} // 선의 불투명도, 1에서 0 사이의 값이며 0에 가까울수록 투명
                            strokeStyle={"solid"} // 선의 스타일
                            fillColor={info.isMouseOver ? "#09f" : "#fff"} // 채우기 색깔
                            fillOpacity={0.7} // 채우기 불투명도
                            onMouseover={() => (info.isMouseOver = true)}
                            onMouseout={() => (info.isMouseOver = false)}
                        />
                    ))}

                    {dongInfo.findIndex((v) => v.isMouseOver) !== -1 && (
                        <CustomOverlayMap position={mousePosition}>
                            <DivArea>{dongInfo.find((v) => v.isMouseOver).dongName}</DivArea>
                        </CustomOverlayMap>
                    )}

                    {selectedDong.map((path, idx) => (
                        <Polygon
                            key={idx}
                            path={path.positions}
                            strokeWeight={2}
                            strokeColor={"red"}
                            strokeOpacity={0.8}
                            strokeStyle={"solid"}
                            fillColor={path.isMouseOver ? "pink" : "#ffe6ea"}
                            fillOpacity={0.7}
                            onMouseover={() => (path.isMouseOver = true)}
                            onMouseout={() => (path.isMouseOver = false)}
                        />
                    ))}
                </Map>
            </MapWrap>

            <WaitBox ref={waitBoxRef}>
                <Spin tip="Loading">
                    <div />
                </Spin>
            </WaitBox>
        </Container>
    );
};

export default MapViewUI;
