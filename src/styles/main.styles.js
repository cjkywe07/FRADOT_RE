import styled from "@emotion/styled";

// --- [파도 & 글자] 컨테이너 ---
export const TopContainer = styled.div`
    /* background: radial-gradient(ellipse at center, #f8f8ff 0%, rgb(197, 211, 255) 35%, #809fff 100%); */
    /* background: radial-gradient(ellipse at center, rgba(255, 254, 234, 1) 0%, rgba(255, 254, 234, 1) 35%, #b7e8eb 100%); */
    overflow: hidden;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    position: relative;
`;

export const Ocean = styled.div`
    width: 100%;
    height: 5%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #015871;
`;

export const Wave = styled.div`
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
    position: absolute;
    top: -198px;
    width: 9000px;
    height: 198px;
    /* 이름, 실행시간, 전환형태(속도곡선), 반복횟수 */
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);

    &:nth-of-type(2) {
        top: -175px;
        animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, swell 7s ease -1.25s infinite;
        opacity: 1;

        @keyframes swell {
            0%,
            100% {
                transform: translate3d(0, -25px, 0);
            }
            50% {
                transform: translate3d(0, 5px, 0);
            }
        }
    }

    @keyframes wave {
        0% {
            margin-left: 0;
        }
        100% {
            margin-left: -1600px;
        }
    }
`;

export const Cover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    background: radial-gradient(
        ellipse at center,
        rgba(226, 226, 255, 0.8) 0%,
        rgba(197, 211, 255, 0.8) 35%,
        rgba(128, 159, 255, 0.8) 100%
    );
    /* background: radial-gradient(
        ellipse at center,
        rgba(248, 248, 255, 0.7) 0%,
        rgba(197, 211, 255, 0.7) 35%,
        rgba(128, 159, 255, 0.7) 100%
    ); */
    /* background: radial-gradient(
        ellipse at center,
        rgba(195, 191, 255, 0.7) 0%,
        rgba(158, 151, 255, 0.7) 35%,
        rgba(117, 107, 255, 0.7) 100%
    ); */
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

// 설명 랩
export const ExplainContainer = styled.div``;

export const ExpalinTab = styled.ul`
    list-style: none;
    z-index: 100;
    position: sticky;
    width: 100%;
    height: 60px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1) !important;
    /* border-bottom: 3px solid rgba(0, 0, 0, 0.1); */
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    column-gap: 100px;

    & li {
        height: inherit;
    }

    @media screen and (min-width: 1280px) {
        /* position: sticky; */
        top: 100px;
    }
`;

export const Tab = styled.p`
    display: inline-block;
    height: inherit;
    line-height: 60px;
    text-decoration: none;
    color: inherit;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: ${(props) => props.current && "3px solid #756bff"};
    opacity: ${(props) => props.current || "20%"};

    &:hover {
        opacity: 100%;
    }
`;

export const ExplainWrap = styled.div`
    background-color: ${(props) => (props.part === "town" ? "#f8f8ff" : "#F0F8FF")};
    padding: 50px 0;
    scroll-margin-top: 160px;
`;

export const ContentWrap = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 50px;
    position: relative; /* 바로가기 버튼 배치 위해 */
`;

export const ExplainText = styled.div`
    text-align: center;

    & > h2 {
        margin-bottom: 20px;
        font-size: 26px;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    }
    & > p {
        font-size: 22px;
        font-weight: 500;
    }
`;
export const ExplainItemWrap = styled.ul`
    list-style: none;
`;

export const ExplainItem = styled.li`
    margin: 50px 0 80px;
    display: flex;
    align-items: center;
    column-gap: 30px;

    &:last-of-type {
        margin-bottom: 0px;
    }
`;
export const ImgWrap = styled.div`
    width: 700px;
    height: 340px;
    overflow: hidden;
    margin: 0 auto;
`;
export const Img = styled.div`
    background-image: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 100%;
    /* background-color: rgb(200, 200, 200); */
    box-shadow: 0 25px 98px 0 rgba(0, 0, 0, 0.1);
`;

export const StepText = styled.div`
    width: 42%;

    & > h2 {
        margin-bottom: 15px;
        font-size: 25px;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    }
    & > p {
        font-size: 22px;
        font-weight: 500;
    }
`;

export const ShortCutBtn = styled.button`
    background-color: #756bff;
    border: none;
    border-radius: 20px;
    padding: 8px 25px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 2px 2px 2px 0 rgba(153, 153, 153, 0.5);
    position: absolute;
    bottom: 0;
    right: ${(props) => props.part === "town" && "50px"};
    left: ${(props) => props.part === "infra" && "50px"};
    transition: 0.5s;

    &:hover {
        transform: translateY(-3px);
    }
`;
