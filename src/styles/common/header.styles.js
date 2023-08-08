import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
    width: 100%;
    height: ${(props) => (props.isMapHeader ? "60px" : "100px")};
    display: flex;
    position: sticky;
    top: 0;
    background-color: #fff;
    box-shadow: 0px 3px 5px rgb(26 26 26 / 7%);
    transform: ${(props) => props.isMapHeader && "translateY(-60px)"};
    transition: 500ms;
    z-index: 100;
`;

export const HeaderDiv = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

export const Img = styled.div`
    background: url("/logo.png") no-repeat center / contain; /* position / size */
    min-width: ${(props) => (props.isMapHeader ? "130px" : "200px")};
    height: ${(props) => (props.isMapHeader ? "30px" : "100px")};
    margin: ${(props) => (props.isMapHeader ? "0 40px 0 200px" : "0 40px 0 70px")};
    cursor: pointer;
`;

export const Menu = styled.div`
    margin-left: ${(props) => (props.isMapHeader ? "80px" : "50px")};
    font-size: ${(props) => (props.isMapHeader ? "20px" : "30px")};
    font-weight: 500;
    text-shadow: 2px 2px 3px rgba(0 0 0 / 20%);
    cursor: pointer;

    &:hover > p {
        color: #5d52ff;
    }
`;
