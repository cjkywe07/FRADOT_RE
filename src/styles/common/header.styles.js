import styled from "@emotion/styled";
import { device } from "../global.styles";

export const HeaderContainer = styled.div`
    width: 100%;
    height: ${(props) => (props.isMapHeader ? "60px" : "100px")};
    position: fixed;
    top: ${(props) => (props.isMapHeader ? "-60px" : "0")};
    background-color: #fff;
    box-shadow: 0px 3px 5px rgb(26 26 26 / 7%);
    transition: 500ms;
    z-index: 100;

    @media screen and (${device.mobileML}) {
        height: 60px;
    }
`;

export const HeaderWrap = styled.div`
    width: 95%;
    max-width: ${(props) => (props.isMapHeader ? "750px" : "1200px")};
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media screen and (${device.mobileML}) {
        justify-content: space-between;
    }
`;

export const Img = styled.div`
    background: url("/logo.png") no-repeat center / contain; /* position / size */
    width: ${(props) => (props.isMapHeader ? "120px" : "200px")};
    height: ${(props) => (props.isMapHeader ? "60px" : "100px")};
    margin: ${(props) => (props.isMapHeader ? "0 80px" : "0 80px")};
    cursor: pointer;

    @media screen and (${device.tablet}) {
        margin: ${(props) => (props.isMapHeader ? "" : "0 50px 0 20px")};
    }

    @media screen and (${device.mobileML}) {
        margin: 0;
        margin-left: 10px;
        width: ${(props) => (props.isMapHeader ? "" : "120px")};
        height: ${(props) => (props.isMapHeader ? "" : "60px")};
    }
`;

export const NavWrap = styled.div``;

export const MenuBtnWrap = styled.div`
    display: none;

    @media screen and (${device.mobileML}) {
        display: block;
    }
`;

export const MenuBtn = styled.div`
    @media screen and (${device.mobileML}) {
        &:first-of-type {
            display: ${(props) => (props.$isMenuActive ? "none" : "block")};
        }

        &:last-of-type {
            display: ${(props) => (props.$isMenuActive ? "block" : "none")};
        }
    }
`;

export const BackGround = styled.div`
    visibility: hidden;

    @media screen and (${device.mobileML}) {
        opacity: 0;
        position: fixed;
        top: 60px;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.2);
        transition: 300ms;
    }
`;

export const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 50px;

    @media screen and (${device.mobileML}) {
        position: fixed;
        top: 60px;
        right: -55%;
        width: 55%;
        height: 100vh;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #fafafa;
        transition: 700ms;
    }
`;

export const Menu = styled.div`
    font-size: ${(props) => (props.isMapHeader ? "20px" : "30px")};
    font-weight: 500;
    text-shadow: 2px 2px 3px rgba(0 0 0 / 20%);
    cursor: pointer;

    &:hover > p {
        color: #5d52ff;
    }

    @media screen and (${device.tablet}) {
        font-size: ${(props) => (props.isMapHeader ? "" : "27px")};
    }

    @media screen and (${device.mobileML}) {
        font-size: ${(props) => (props.isMapHeader ? "" : "20px")};
        width: 100%;
        padding: 8px 15px;
        border-bottom: 1px solid #e5e5e5;
    }
`;
