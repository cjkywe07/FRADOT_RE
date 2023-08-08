import styled from "@emotion/styled";

export const Main = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    min-width: 1200px;
    padding: 0 30px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    height: 140px;

    & > h2 {
        font-size: 40px;
        font-weight: bolder;
        line-height: 140px;
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
`;

export const Text = styled.div`
    padding: 0 15px;
`;

export const Ptag = styled.p``;

export const ProjecInformationContainer = styled.div``;

export const Purposecontainer = styled.div``;

export const SubTitle = styled.p`
    margin: 15px;
    font-size: 20px;
    font-weight: bold;
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
`;

export const Logo = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    border: 1px solid black;

    & > p {
        text-align: center;
        color: #a1a1a1;
    }
`;

export const LogoImg = styled.div`
    background-image: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 70%;
    height: 100px;
    margin: 80px auto;
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
    }
`;

export const MyColor = styled.div`
    height: 30px;
    background-color: ${(props) => props.divColor};
`;
