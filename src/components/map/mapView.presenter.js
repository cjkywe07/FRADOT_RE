import { Spin } from "antd";
import { CgMenuRound } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { CustomOverlayMap, Map, MapMarker, Polygon } from "react-kakao-maps-sdk";
import CategoryBox from "./categoryBox";
import Header from "../common/header";
import {
    Bar,
    CategoryBoxWrap,
    CloseBtn,
    Container,
    DivArea,
    HeaderPartWrap,
    MapWrap,
    MenuBtn,
    NameArea,
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
        mapCenter,
        mapLevel,
        mapMaxLevel,
        dataInfo,
        polygonInfo,
        clickedPloygon,
        clickedMarker,
        selectedDong,
        selectedType,
        mousePosition,
        categoryList,
        markerSrc,
        setMap,
        setPolygonInfo,
        setClickedPolygon,
        setClickedMarker,
        setSelectedDong,
        setMousePosition,
        infraBtnClick,
        searchBtnClick,
        headerShowCtrl,
        sideBarShowCtrl,
        infraBtnColorCtrl,
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
                        <CategoryBoxWrap>
                            <CloseBtn onClick={() => sideBarShowCtrl(0)}>
                                <IoMdCloseCircle size="23" />
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
                        </CategoryBoxWrap>

                        {isDongFind && <Search onClick={searchBtnClick}>검색</Search>}
                    </SideBar>
                </SideWrap>

                <Map
                    id={`map`}
                    center={mapCenter}
                    style={{
                        width: "100%",
                        height: "100vh",
                        position: "absolute",
                    }}
                    level={mapLevel}
                    maxLevel={mapMaxLevel}
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
                                    onClick={(_, mouseEvent) => {
                                        selectedDong &&
                                            setSelectedDong((prev) => [...prev.map((el) => ({ ...el, isMouseOver: false }))]);
                                        setPolygonInfo((prev) => [
                                            ...prev.filter((_, i) => i !== idx).map((el) => ({ ...el, isMouseOver: false })),
                                            {
                                                ...prev[idx],
                                                isMouseOver: true,
                                            },
                                        ]);
                                        setClickedPolygon({
                                            position: {
                                                lat: mouseEvent.latLng.getLat(),
                                                lng: mouseEvent.latLng.getLng(),
                                            },
                                            dongName: info.dongName,
                                        });
                                    }}
                                />
                            ))}

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
                                    onClick={(_, mouseEvent) => {
                                        setPolygonInfo((prev) => [...prev.map((el) => ({ ...el, isMouseOver: false }))]);
                                        setSelectedDong((prev) => [
                                            ...prev.filter((_, i) => i !== idx).map((el) => ({ ...el, isMouseOver: false })),
                                            {
                                                ...prev[idx],
                                                isMouseOver: true,
                                            },
                                        ]);
                                        setClickedPolygon({
                                            position: {
                                                lat: mouseEvent.latLng.getLat(),
                                                lng: mouseEvent.latLng.getLng(),
                                            },
                                            dongName: info.dongName,
                                        });
                                    }}
                                />
                            ))}

                            {polygonInfo.findIndex((v) => v.isMouseOver) !== -1 && (
                                <CustomOverlayMap position={mousePosition}>
                                    <DivArea>{polygonInfo.find((v) => v.isMouseOver).dongName}</DivArea>
                                </CustomOverlayMap>
                            )}

                            {selectedDong.findIndex((v) => v.isMouseOver) !== -1 && (
                                <CustomOverlayMap position={mousePosition}>
                                    <DivArea>{selectedDong.find((v) => v.isMouseOver).dongName}</DivArea>
                                </CustomOverlayMap>
                            )}

                            {clickedPloygon && (
                                <CustomOverlayMap position={clickedPloygon.position} yAnchor={1}>
                                    <NameArea>
                                        <p>{clickedPloygon.dongName}</p>
                                        <IoClose
                                            size="20"
                                            onClick={() => {
                                                setPolygonInfo((prev) => [...prev.map((el) => ({ ...el, isMouseOver: false }))]);
                                                selectedDong &&
                                                    setSelectedDong((prev) => [
                                                        ...prev.map((el) => ({ ...el, isMouseOver: false })),
                                                    ]);
                                                setClickedPolygon(null);
                                            }}
                                        />
                                    </NameArea>
                                </CustomOverlayMap>
                            )}
                        </>
                    ) : (
                        <>
                            <Polygon
                                path={polygonInfo}
                                strokeWeight={2}
                                strokeColor={"#004c80"}
                                strokeOpacity={0.8}
                                strokeStyle={"solid"}
                                fillColor={"#fff"}
                                fillOpacity={0.7}
                            />

                            {selectedType.map((type) =>
                                dataInfo[type].map((el, idx) => (
                                    <MapMarker
                                        key={idx}
                                        position={el.position}
                                        title={el.infraName}
                                        image={{
                                            src: markerSrc[type],
                                            size: { width: 30 },
                                        }}
                                        onClick={() => {
                                            setClickedMarker({
                                                position: el.position,
                                                infraName: el.infraName,
                                            });
                                        }}
                                    />
                                ))
                            )}

                            {clickedMarker && (
                                <CustomOverlayMap position={clickedMarker.position} xAnchor={0.4} yAnchor={1.3}>
                                    <NameArea>
                                        <p>{clickedMarker.infraName}</p>
                                        <IoClose size="20" onClick={() => setClickedMarker(null)} />
                                    </NameArea>
                                </CustomOverlayMap>
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
