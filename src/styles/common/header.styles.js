import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: white;
    & a {
        text-decoration: none;
    }
`;
export const HeaderDiv = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;
export const Img = styled.div`
    display: inline-block;
    width: 200px;
    height: 100px;
    margin: ${(props) => (props.isHeaderLogo ? "0 25px 0 80px" : "0 auto")};
    cursor: ${(props) => props.isHeaderLogo && "pointer"};
    background: url("/logo.png") no-repeat center / contain;
`;
export const Menu2 = styled.div`
    font-size: 30px;
    font-weight: 500;
    margin-left: 50px;
    cursor: pointer;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

    &:hover > p {
        color: #5d52ff;
    }
`;
