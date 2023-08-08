import { Spin } from "antd";
import { CgMenuRound } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
import { CustomOverlayMap, Map, MapMarker, Polygon } from "react-kakao-maps-sdk";
import CategoryBox from "./categoryBox";
import Header from "../common/header";
import {
    Bar,
    CloseBtn,
    Container,
    DivArea,
    HeaderPartWrap,
    MapWrap,
    MenuBtn,
    Search,
    SideBar,
    SideWrap,
    WaitBox,
} from "@/styles/map.styles";

const MapViewUI = (props) => {
    const {
        isDongFind,
        barRef,
        headerRef,
        menuBtnRef,
        sideBarRef,
        waitBoxRef,
        infraBtnRef,
        clickCnt,
        dataInfo,
        polygonInfo,
        selectedDong,
        selectedType,
        mousePosition,
        categoryList,
        markerSrc,
        setMap,
        setMousePosition,
        infraBtnClick,
        searchBtnClick,
        headerShowCtrl,
        sideBarShowCtrl,
        infraBtnColorCtrl,
        check,
    } = props;

    return (
        <Container>
            <MapWrap>
                <HeaderPartWrap onMouseOver={() => headerShowCtrl(1)} onMouseOut={() => headerShowCtrl(0)}>
                    <Bar ref={barRef}></Bar>
                    <Header ref={headerRef} isMapHeader></Header>
                </HeaderPartWrap>

                <SideWrap>
                    <MenuBtn ref={menuBtnRef} onClick={() => sideBarShowCtrl(1)}>
                        <CgMenuRound size="30" color="#004c80" />
                    </MenuBtn>

                    <SideBar ref={sideBarRef}>
                        <div>
                            <CloseBtn onClick={() => sideBarShowCtrl(0)}>
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
                                    infraBtnColorCtrl={infraBtnColorCtrl}
                                />
                            ))}
                        </div>

                        {isDongFind && <Search onClick={searchBtnClick}>검색</Search>}
                        {/* <Search onClick={check}>확인</Search> */}
                    </SideBar>
                </SideWrap>

                <Map
                    id={`map`}
                    center={{
                        lat: 37.573423,
                        lng: 126.923589,
                    }}
                    style={{
                        width: "100%",
                        height: "100vh",
                        position: "absolute",
                    }}
                    level={9}
                    maxLevel={9}
                    onCreate={setMap}
                    onMouseMove={
                        isDongFind
                            ? (_map, mouseEvent) =>
                                  setMousePosition({
                                      lat: mouseEvent.latLng.getLat(),
                                      lng: mouseEvent.latLng.getLng(),
                                  })
                            : () => {}
                    }
                >
                    {isDongFind ? (
                        <>
                            {polygonInfo.map((info, idx) => (
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

                            {polygonInfo.findIndex((v) => v.isMouseOver) !== -1 && (
                                <CustomOverlayMap position={mousePosition}>
                                    <DivArea>{polygonInfo.find((v) => v.isMouseOver).dongName}</DivArea>
                                </CustomOverlayMap>
                            )}

                            {selectedDong.map((info, idx) => (
                                <Polygon
                                    key={idx}
                                    path={info.positions}
                                    strokeWeight={2}
                                    strokeColor={"red"}
                                    strokeOpacity={0.8}
                                    strokeStyle={"solid"}
                                    fillColor={info.isMouseOver ? "pink" : "#ffe6ea"}
                                    fillOpacity={0.7}
                                    onMouseover={() => (info.isMouseOver = true)}
                                    onMouseout={() => (info.isMouseOver = false)}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            <Polygon
                                path={polygonInfo} // 그려질 다각형의 좌표 배열
                                strokeWeight={2} // 선의 두께
                                strokeColor={"#004c80"} // 선의 색깔
                                strokeOpacity={0.8} // 선의 불투명도, 1에서 0 사이의 값이며 0에 가까울수록 투명
                                strokeStyle={"solid"} // 선의 스타일
                                fillColor={"#fff"} // 채우기 색깔
                                fillOpacity={0.7} // 채우기 불투명도
                            />

                            {selectedType.map((type) =>
                                dataInfo[type].map((el, idx) => (
                                    <MapMarker
                                        key={idx}
                                        position={el.position}
                                        title={el.infraName}
                                        image={{ src: markerSrc[type], size: { width: 30 } }}
                                    />
                                ))
                            )}
                        </>
                    )}
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
