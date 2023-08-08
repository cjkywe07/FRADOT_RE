import { HeaderDiv, HeaderWrap, Img, Menu } from "@/styles/common/header.styles";
import { useMovetoPage } from "./hooks/useMoveToPage";
import { forwardRef } from "react";

const Header = forwardRef((props, headerRef) => {
    let { onClickMoveToPage } = useMovetoPage();

    const nav = [
        { txt: "동네찾기", url: "/map1" },
        { txt: "인프라찾기", url: "/map2" },
        { txt: "About us", url: "/aboutUs" },
    ];

    return (
        <HeaderWrap ref={headerRef} isMapHeader={props.isMapHeader}>
            <HeaderDiv>
                <Img onClick={onClickMoveToPage("/")} isMapHeader={props.isMapHeader}></Img>

                {nav.map((el, idx) => (
                    <Menu key={idx} isMapHeader={props.isMapHeader}>
                        <p onClick={onClickMoveToPage(el.url)}>{el.txt}</p>
                    </Menu>
                ))}
            </HeaderDiv>
        </HeaderWrap>
    );
});

export default Header;
