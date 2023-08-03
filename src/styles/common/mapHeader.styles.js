import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
    transform: translateY(-60px);
    transition: 500ms;
    width: 100%;
    height: 60px;
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
    width: 130px;
    height: 30px;
    margin: 0 40px 0 200px;
    cursor: pointer;
    background: url("/logo.png") no-repeat center / contain;
`;
export const Menu2 = styled.div`
    font-size: 20px;
    font-weight: 500;
    margin-left: 80px;
    cursor: pointer;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

    &:hover > p {
        color: #5d52ff;
    }
`;
