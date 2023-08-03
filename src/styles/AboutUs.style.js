import styled from "@emotion/styled";

// Main
export const Main = styled.div`
    position: relative;
    margin: 0 auto;
    width: 1200px;
`;

export const Title = styled.p`
    margin: 30px 0 10px 0;
    font-size: 25px;
    font-weight: bold;
`;

export const SubTitle = styled.p`
    margin: 15px 0 10px 0;
    font-size: 20px;
    font-weight: bold;
`;

export const Ptag = styled.p`
    color: #424242;
`;

// 제목
export const TitleContainer = styled.div`
    width: 100%;
    height: 140px;
    padding: 0 0 0 20px;
    /* background-image: url("/logo2.jpg"); */
    background-size: cover;
    background-position: center;

    & h2 {
        font-size: 40px;
        font-weight: bolder;
        line-height: 130px;
    }
`;

// 컨텐츠
export const ContentsContainer = styled.div`
    padding: 0 20px 0 20px;
`;

// 인사말
export const HelloContainer = styled.div`
    margin: 20px 0 0 0;
`;
export const Hello = styled.div`
    padding: 0 0 0 5px;
`;

// 팀원 소개
export const TeamInformationContainer = styled.div`
    padding: 20px 0 0 0;
`;

export const Member = styled.div`
    display: flex;
    justify-content: space-between;
`;

// 프로젝트 소개
export const ProjecInformationContainer = styled.div`
    padding: 20px 0 0 0;
`;

// logo
export const LogoImgContainer = styled.div`
    height: 300px;
    width: 100%;
    /* margin: 10px 20px 10px 20px; */
    background-color: #ffffff;
    display: flex;
    border: 1px solid black;
`;

export const Logo = styled.div`
    width: 50%;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    border: 1px solid black;
    & p {
        text-align: center;
        color: #a1a1a1;
        bottom: 0px;
    }
`;

export const LogoImg_1 = styled.div`
    background-image: url("/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 70%;
    height: 100px;
    margin: 80px auto;
`;

export const LogoImg_2 = styled.div`
    background-image: url("/gridlogo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 70%;
    height: 100px;
    margin: 80px auto;
`;

// color
export const Color = styled.div`
    padding: 20px 0 0 0;
`;

export const ColorContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const ColorContent = styled.div`
    width: 100%;
    & p {
        text-align: center;
    }
`;

export const MyColor = styled.div`
    height: 30px;
    background-color: ${(props) => props.divColor};
`;
