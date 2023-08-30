import { Global, css } from "@emotion/react";

export const device = {
    // desktop : 2560 이상
    // laptopL : 1440 이상
    // laptopM : 1280 이상
    laptopS: "max-width: 1279px", // 1024 ~ 1279
    tablet: "max-width: 1023px", // 768 ~ 1023
    mobileML: "max-width: 767px", // 375 ~ 767
    mobileS: "max-width: 374px", // 374 이하
};

const MyStyle = css`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif;
        list-style: none;
    }
    body {
        color: #333;
    }
    button {
        color: #333;
    }
`;

const GlobalStyle = () => {
    return <Global styles={MyStyle}></Global>;
};

export default GlobalStyle;
