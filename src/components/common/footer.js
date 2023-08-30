import { FooterContainer, FooterWrap, Img, In, Info, Line, TopBtn } from "@/styles/common/footer.styles";
import { useEffect, useRef } from "react";

const Footer = () => {
    let topBtnRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (!topBtnRef.current) return;

            if (window.scrollY > 10) {
                topBtnRef.current.style.opacity = "1";
                topBtnRef.current.style.transition = "500ms";
            } else {
                topBtnRef.current.style.opacity = "0";
                topBtnRef.current.style.transition = "500ms";
            }
        });
    }, []);

    return (
        <FooterContainer>
            <FooterWrap>
                <Img></Img>
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
                <TopBtn
                    ref={topBtnRef}
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}
                >
                    <p>▲</p>
                    <p>Top</p>
                </TopBtn>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
