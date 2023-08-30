import { IoMenu, IoClose } from "react-icons/io5";
import {
    BackGround,
    HeaderContainer,
    HeaderWrap,
    Img,
    Menu,
    MenuBtn,
    MenuBtnWrap,
    Nav,
    NavWrap,
} from "@/styles/common/header.styles";
import { useMovetoPage } from "./hooks/useMoveToPage";
import { forwardRef, useRef, useState } from "react";

const Header = forwardRef((props, headerRef) => {
    let { onClickMoveToPage } = useMovetoPage();

    // let clickCnt = useRef(0);
    let menuRef = useRef(null);
    let backGroundRef = useRef(null);

    const [isMenuActive, setisMenuActive] = useState(false);

    const nav = [
        { txt: "동네찾기", url: "/map1" },
        { txt: "인프라찾기", url: "/map2" },
        { txt: "About us", url: "/aboutUs" },
    ];

    const menuShowCtrl = () => {
        menuRef.current.style.right = isMenuActive ? "-55%" : "0";
        backGroundRef.current.style.visibility = isMenuActive ? "hidden" : "visible";
        backGroundRef.current.style.opacity = isMenuActive ? "0" : "1";
        isMenuActive ? setisMenuActive(false) : setisMenuActive(true);
    };

    return (
        <HeaderContainer ref={headerRef} isMapHeader={props.isMapHeader}>
            {/* <button onClick={() => console.log(props.isMapHeader)}>버튼</button> */}

            <HeaderWrap isMapHeader={props.isMapHeader}>
                <Img onClick={onClickMoveToPage("/")} isMapHeader={props.isMapHeader}></Img>

                <NavWrap>
                    <MenuBtnWrap onClick={() => menuShowCtrl()}>
                        <MenuBtn $isMenuActive={isMenuActive}>
                            <IoMenu size="35" />
                        </MenuBtn>
                        <MenuBtn $isMenuActive={isMenuActive}>
                            <IoClose size="35" />
                        </MenuBtn>
                    </MenuBtnWrap>

                    <BackGround ref={backGroundRef} />

                    <Nav ref={menuRef}>
                        {nav.map((el, idx) => (
                            <Menu key={idx} isMapHeader={props.isMapHeader}>
                                <p onClick={onClickMoveToPage(el.url)}>{el.txt}</p>
                            </Menu>
                        ))}
                    </Nav>
                </NavWrap>
            </HeaderWrap>
        </HeaderContainer>
    );
});

export default Header;
