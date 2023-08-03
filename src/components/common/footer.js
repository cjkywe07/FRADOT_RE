import { FooterWrap, In, Info, Line, Logo2 } from "@/styles/common/footer.styles";
import { Img } from "@/styles/common/header.styles";

const Footer = () => {
    return (
        <FooterWrap>
            <Logo2>
                <Img></Img>
            </Logo2>
            <Line></Line>
            <Info>
                <In>(주)프라닷</In>
                <In> ㅣ </In>
                <In>주소: 서울특별시 어딘가</In>
                <In>팩스: 02-113-5599</In>
                <In>고객센터: 02- 232-1121</In>
                <In>본사 대표전화: 02-232-1121</In>
                <In>가맹상담전화: 02-232-1121</In>
            </Info>
        </FooterWrap>
    );
};

export default Footer;
