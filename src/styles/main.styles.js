import styled from "@emotion/styled";
import { device } from "./global.styles";

export const TopContainer = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
    overflow: hidden;
    margin-top: 100px;

    @media screen and (${device.tablet}) {
        height: 450px;
    }

    @media screen and (${device.mobileML}) {
        height: 250px;
        margin-top: 60px;
    }
`;

export const Ocean = styled.div`
    width: 100%;
    height: 8%;
    position: absolute;
    bottom: 0;
    background: #015871;

    @media screen and (${device.mobileML}) {
        background: none;
    }
`;

export const Wave = styled.div`
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
    position: absolute;
    top: -198px;
    width: 9000px;
    height: 198px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);

    @keyframes wave {
        from {
            margin-left: 0;
        }
        to {
            margin-left: -1600px;
        }
    }

    @media screen and (${device.mobileML}) {
        top: -125px;
    }

    &:nth-of-type(2) {
        top: -175px;
        animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, swell 7s ease -1.25s infinite;
        opacity: 1;

        @keyframes swell {
            0%,
            100% {
                transform: translateY(-25px);
            }
            50% {
                transform: translateY(5px);
            }
        }

        @media screen and (${device.mobileML}) {
            top: -105px;
        }
    }
`;

export const Cover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        ellipse at center,
        rgba(221, 221, 255, 0.8) 0%,
        rgba(193, 208, 255, 0.8) 20%,
        rgba(124, 157, 255, 0.8) 100%
    );
`;

export const Text = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 25px;

    h1 {
        font-size: 55px;
    }
    div {
        display: flex;
        column-gap: 10px;
    }
    p {
        font-size: 26px;
    }

    @media screen and (${device.tablet}) {
        div {
            display: block;
        }
        p {
            text-align: center;
        }
    }

    @media screen and (${device.mobileML}) {
        row-gap: 15px;

        h1 {
            font-size: 30px;
        }
        p {
            font-size: 16px;
        }
    }

    @media screen and (${device.mobileS}) {
        h1 {
            font-size: 27px;
        }
        p {
            font-size: 15px;
        }
    }

    @media screen and (max-width: 319px) {
        h1 {
            font-size: 25px;
        }
        p {
            font-size: 14px;
        }
    }
`;

export const ExplainContainer = styled.div``;

export const ExpalinTab = styled.div`
    z-index: 90;
    position: sticky;
    width: 100%;
    height: 60px;
    box-shadow: 0px 2px 2px rgb(26 26 26 / 7%);
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 100px;
    top: 99px;

    @media screen and (${device.mobileML}) {
        height: 45px;
        justify-content: space-evenly;
        column-gap: 0;
        top: 59px;
    }
`;

export const Tab = styled.p`
    height: inherit;
    line-height: 60px;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;

    @media screen and (${device.mobileML}) {
        line-height: 45px;
        font-size: 17px;
    }

    @media screen and (${device.mobileS}) {
        font-size: 16px;
    }
`;

export const ExplainWrap = styled.div`
    width: 100%;
    background-color: ${(props) => (props.isDongFind ? "#f8f8ff" : "#F0F8FF")};
    padding: 50px 0;
    scroll-margin-top: 160px;

    @media screen and (${device.mobileML}) {
        padding: 25px 0;
        scroll-margin-top: 105px;
    }
`;

export const ContentWrap = styled.div`
    margin: 0 auto;
    max-width: 1260px;
    padding: 0 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 50px;

    @media screen and (${device.laptopS}) {
        max-width: 1030px;
    }

    @media screen and (${device.mobileML}) {
        row-gap: 30px;
        padding: 0 18px;
    }
`;

export const ExplainText = styled.div`
    text-align: center;

    h2 {
        margin-bottom: 20px;
        font-size: 26px;
        text-shadow: 2px 2px 2px rgb(0 0 0 / 20%);
    }
    p {
        font-size: 22px;
        font-weight: 500;
    }

    @media screen and (${device.mobileML}) {
        h2 {
            margin-bottom: 10px;
            font-size: 20px;
        }
        p {
            font-size: 16px;
        }
    }

    @media screen and (${device.mobileS}) {
        h2 {
            font-size: 17px;
        }
        p {
            font-size: 14px;
        }
    }
`;

export const ExplainItemWrap = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 80px;

    @media screen and (${device.tablet}) {
        row-gap: 60px;
    }

    @media screen and (${device.mobileML}) {
        row-gap: 40px;
    }
`;

export const ExplainItem = styled.li`
    position: relative;

    @media screen and (${device.tablet}) {
        display: flex;
        flex-direction: column;
    }
`;

export const ImgWrap = styled.div`
    width: 662px;
    height: 345px;
    box-shadow: 0 25px 98px rgb(0 0 0 / 10%);
    float: ${(props) => (props.isFirstPart ? "left" : "right")};

    @media screen and (${device.laptopS}) {
        width: 582px;
        height: 304px;
    }

    @media screen and (${device.tablet}) {
        width: 662px;
        height: 345px;
        margin: 0 auto;
    }

    @media screen and (${device.mobileML}) {
        width: 320px;
        height: 167px;
    }

    @media screen and (${device.mobileS}) {
        width: 280px;
        height: 146px;
    }

    @media screen and (max-width: 319px) {
        width: 230px;
        height: 120px;
    }
`;

export const Img = styled.div`
    background-image: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 100%;
`;

export const StepText = styled.div`
    width: 40%;
    position: absolute;
    right: ${(props) => props.isFirstPart && "0"};
    top: 50%;
    transform: translateY(-50%);

    h2 {
        margin-bottom: 15px;
        font-size: 25px;
        text-shadow: 2px 2px 2px rgb(0 0 0 / 20%);
    }
    p {
        font-size: 22px;
        font-weight: 500;
    }

    @media screen and (${device.laptopS}) {
        width: 35%;
    }

    @media screen and (${device.tablet}) {
        position: static;
        width: 100%;
        margin-top: 10px;
        text-align: center;
        transform: translateY(0);
    }

    @media screen and (${device.mobileML}) {
        h2 {
            margin-bottom: 5px;
            font-size: 20px;
        }
        p {
            font-size: 16px;
        }
    }

    @media screen and (${device.mobileS}) {
        h2 {
            font-size: 17px;
        }
        p {
            font-size: 14px;
        }
    }
`;

export const ShortCutBtn = styled.button`
    clear: both;
    padding: 8px 25px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 20px;
    color: white;
    background-color: #756bff;
    box-shadow: 2px 2px 2px rgb(153 153 153 / 50%);
    cursor: pointer;
    transition: 0.5s;
    position: absolute;
    bottom: 0;
    right: ${(props) => props.isDongFind && "50px"};
    left: ${(props) => props.isDongFind || "50px"};

    &:hover {
        transform: translateY(-3px);
    }

    @media screen and (${device.tablet}) {
        position: static;
        margin: -20px auto 0;
    }

    @media screen and (${device.mobileML}) {
        font-size: 12px;
        padding: 6px 18px;
        margin: -10px auto 0;
    }

    @media screen and (${device.mobileS}) {
        font-size: 10px;
        padding: 5px 16px;
    }
`;
