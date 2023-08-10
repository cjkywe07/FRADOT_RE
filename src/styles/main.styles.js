import styled from "@emotion/styled";

export const TopContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 500px;
    position: relative;
    background-color: #d9d9d9;
`;

export const Ocean = styled.div`
    width: 100%;
    height: 8%;
    position: absolute;
    bottom: 0;
    background: #015871;
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

    & > h1 {
        font-size: 55px;
    }
    & > p {
        font-size: 26px;
        font-weight: 400;
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

    @media screen and (min-width: 1280px) {
        top: 100px;
    }
`;

export const Tab = styled.p`
    height: inherit;
    line-height: 60px;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
`;

export const ExplainWrap = styled.div`
    background-color: ${(props) => (props.isDongFind ? "#f8f8ff" : "#F0F8FF")};
    padding: 50px 0;
    scroll-margin-top: 160px;
`;

export const ContentWrap = styled.div`
    margin: 0 auto;
    width: 1260px;
    padding: 0 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const ExplainText = styled.div`
    text-align: center;

    & > h2 {
        margin-bottom: 20px;
        font-size: 26px;
        text-shadow: 2px 2px 2px rgb(0 0 0 / 20%);
    }
    & > p {
        font-size: 22px;
        font-weight: 500;
    }
`;

export const ExplainItemWrap = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 80px;
`;

export const ExplainItem = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const ImgWrap = styled.div`
    width: 700px;
    height: 347px;
    box-shadow: 0 25px 98px rgb(0 0 0 / 10%);
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
    width: 42%;

    & > h2 {
        margin-bottom: 15px;
        font-size: 25px;
        text-shadow: 2px 2px 2px rgb(0 0 0 / 20%);
    }
    & > p {
        font-size: 22px;
        font-weight: 500;
    }
`;

export const ShortCutBtn = styled.button`
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
`;
