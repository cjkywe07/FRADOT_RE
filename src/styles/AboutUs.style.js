import styled from "@emotion/styled";
import { device } from "./global.styles";

export const Main = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 0 30px;
    margin-top: 100px;
    margin-bottom: 20px;

    @media screen and (${device.mobileML}) {
        margin-top: 60px;
        padding: 0 18px;
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    height: 140px;

    h2 {
        font-size: 40px;
        font-weight: bolder;
        line-height: 140px;
    }

    @media screen and (${device.mobileML}) {
        height: 100px;

        h2 {
            font-size: 28px;
            font-weight: bolder;
            line-height: 100px;
        }
    }

    @media screen and (${device.mobileS}) {
        h2 {
            font-size: 26px;
        }
    }
`;

export const ContentsContainer = styled.div``;

export const HelloContainer = styled.div`
    margin: 40px 0;
`;

export const Title = styled.p`
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: bold;

    @media screen and (${device.mobileML}) {
        font-size: 24px;
    }

    @media screen and (${device.mobileS}) {
        font-size: 22px;
    }
`;

export const Text = styled.div`
    padding: 0 15px;
`;

export const Ptag = styled.p`
    font-size: 18px;
    text-align: justify;

    @media screen and (${device.mobileML}) {
        font-size: 16px;
    }

    @media screen and (${device.mobileS}) {
        font-size: 14px;
    }
`;

export const ProjecInformationContainer = styled.div``;

export const Purposecontainer = styled.div``;

export const SubTitle = styled.p`
    margin: 15px;
    font-size: 20px;
    font-weight: bold;

    @media screen and (${device.mobileS}) {
        font-size: 18px;
    }
`;

export const LogoImgContainer = styled.div`
    margin: 40px 0;
`;

export const LogoImgBox = styled.div`
    margin: 0 auto;
    width: calc(100% - 30px);
    height: 300px;
    display: flex;
    border: 1px solid black;

    @media screen and (${device.tablet}) {
        height: 220px;
    }

    @media screen and (${device.mobileML}) {
        height: 380px;
        flex-direction: column;
    }
`;

export const Logo = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    border: 1px solid black;

    & > p {
        font-size: 18px;
        text-align: center;
        color: #a1a1a1;
    }

    @media screen and (${device.mobileML}) {
        width: 100%;

        & > p {
            font-size: 16px;
        }
    }

    @media screen and (${device.mobileS}) {
        & > p {
            font-size: 14px;
        }
    }
`;

export const LogoImg = styled.div`
    background-image: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 400px;
    height: 100px;
    margin: 80px auto;

    @media screen and (${device.tablet}) {
        width: 300px;
        height: 75px;
        margin: 55px auto;
    }

    @media screen and (${device.mobileML}) {
        width: 250px;
        height: 60px;
        margin: 50px auto 45px;
    }

    @media screen and (${device.mobileML}) {
        width: 230px;
        height: 50px;
        margin: 60px auto 50px;
    }
`;

export const ColorContainer = styled.div``;

export const ColorBox = styled.div`
    margin: 0 auto;
    width: calc(100% - 30px);
    display: flex;
    gap: 10px;
`;

export const ColorContent = styled.div`
    width: 100%;

    & > p {
        text-align: center;
        margin-top: 5px;
    }
`;

export const MyColor = styled.div`
    height: 30px;
    background-color: ${(props) => props.divColor};
`;
