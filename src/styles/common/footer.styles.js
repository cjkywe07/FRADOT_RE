import styled from "@emotion/styled";

export const FooterWrap = styled.div`
    width: 1200px;
    height: 300px;
    margin: 20px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.div`
    background: url("/logo.png") no-repeat center / contain;
    width: 200px;
    height: 100px;
`;

export const Line = styled.div`
    border-bottom: 1px solid black;
    width: 1000px;
`;

export const Info = styled.div`
    width: 340px;
    height: 130px;
    padding-top: 30px;
    font-size: 13px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0px 17px;
`;

export const In = styled.div``;

export const TopBtn = styled.div`
    width: 60px;
    height: 60px;
    background-color: #756bff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    right: 15%;
    opacity: 0;
    z-index: 100;

    &:hover {
        background-color: #6257ff;
    }

    & > p:first-of-type {
        font-size: 10px;
        line-height: 10px;
    }
`;
