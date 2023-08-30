import styled from "@emotion/styled";
import { device } from "../global.styles";

export const FooterContainer = styled.div`
    width: 100%;
`;

export const FooterWrap = styled.div`
    width: 95%;
    height: 280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (${device.mobileML}) {
        height: 240px;
    }
`;

export const Img = styled.div`
    background: url("/logo.png") no-repeat center / contain;
    width: 200px;
    height: 100px;

    @media screen and (${device.mobileML}) {
        width: 140px;
        height: 70px;
    }
`;

export const Line = styled.div`
    border-bottom: 1px solid black;
    width: 90%;
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

    @media screen and (${device.mobileML}) {
        height: 120px;
        padding-top: 20px;
    }

    @media screen and (${device.mobileS}) {
        width: 320px;
    }
`;

export const In = styled.div`
    @media screen and (${device.mobileS}) {
        font-size: 12px;
    }
`;

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

    &:hover {
        background-color: #6257ff;
    }

    p:first-of-type {
        font-size: 10px;
        line-height: 10px;
    }

    @media screen and (${device.mobileML}) {
        width: 40px;
        height: 40px;
        right: 10%;
        font-size: 12px;
    }
`;
