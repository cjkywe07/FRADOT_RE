import { Global, css } from "@emotion/react";

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
