import LayOut from "@/components/common/layout";
import {
    ContentWrap,
    Cover,
    ExpalinTab,
    ExplainContainer,
    ExplainItem,
    ExplainItemWrap,
    ExplainText,
    ExplainWrap,
    Img,
    Tab,
    Ocean,
    ShortCutBtn,
    StepText,
    Text,
    TopContainer,
    Wave,
    ImgWrap,
} from "@/styles/main.styles";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const MainPage = () => {
    const router = useRouter();

    const tabPart = useRef([]); // 탭 클릭 시 이동하려는 컴포넌트 의 배열
    const tab = ["동네찾기 알아보기", "인프라찾기 알아보기"]; // 탭 이름 배열
    const [currentTabPart, setCurrentTabPart] = useState(false); // 선택된 탭 아래에 스타일 적용하기 위해 current props의 조건으로 사용할 state 변수

    useEffect(() => {
        // 콜백함수
        // 매개변수로 entries 를 받음
        // entries는 entry 를 담는 배열
        // entry는 해당 Observer가 관찰하고 있는 요소들
        const changeTab = (entries) => {
            entries.forEach((entry) => {
                // isIntersecting : 타겟이 현재 root에서 관찰되는지 (bloolean)
                if (entry.isIntersecting) {
                    // 타겟이 관찰될 때 실행할 코드
                    setCurrentTabPart(entry.target); // target : 관찰 중인 타겟 엘리먼트
                }
            });
        };

        // 옵션
        const observeOption = { rootMargin: "-10% 0px", threshold: 0.1 };

        // IntersectionObserver 생성
        // 특정 요소(ex.tabPart)가 화면에 나타나면/사라지면 동작 수행
        const tabObserver = new IntersectionObserver(
            changeTab, // 콜백함수
            observeOption // [옵션]
        );

        tabPart.current.forEach((tab) => tabObserver.observe(tab));

        return () => tabObserver.disconnect();
    }, []);

    const mapBtn1 = () => {
        router.push("/map1");
    };

    const mapBtn2 = () => {
        router.push("/map2");
    };

    return (
        <LayOut>
            <TopContainer>
                <Ocean>
                    <Wave></Wave>
                    <Wave></Wave>
                </Ocean>
                <Cover></Cover>
                <Text>
                    <h1>내 주변의 모든 것, 프라닷</h1>
                    <p>내가 원하는 인프라를 갖춘 동네를, 우리 동네에 있는 인프라를 한 눈에 살펴보세요</p>
                </Text>
            </TopContainer>

            <ExplainContainer>
                <ExpalinTab>
                    {/* 2개의 탭 생성 */}
                    {tab.map((data, idx) => (
                        <li key={idx}>
                            <Tab
                                onClick={() => {
                                    // ex) 첫(두) 번째 탭 클릭 시
                                    tabPart.current[idx].scrollIntoView({ behavior: "smooth" }); // 첫(두) 번째 컴포넌트로 스크롤
                                    setCurrentTabPart(tabPart.current[idx]); // currentTabPart를, 스크롤된 컴포넌트로 설정
                                }}
                                current={tabPart.current[idx] === currentTabPart} // 첫(두) 번째 탭이 currentTabPart(스크롤된 컴포넌트) 라면 true
                            >
                                {data}
                            </Tab>
                        </li>
                    ))}
                </ExpalinTab>

                <ExplainWrap ref={(el) => (tabPart.current[0] = el)} part="town">
                    <ContentWrap>
                        <ExplainText>
                            <h2>동네찾기란?</h2>
                            <p>
                                원하는 인프라 시설을 선택하여
                                <br />
                                해당 인프라 시설이 모여있는 동네를 찾아보세요!
                            </p>
                        </ExplainText>

                        <ExplainItemWrap>
                            <ExplainItem>
                                <ImgWrap>
                                    <Img src="/map1-1.jpg">
                                        {/* <Image src="/map1-1.jpg" width={675} height={340} alt="map1-1"></Image> */}
                                    </Img>
                                </ImgWrap>

                                <StepText>
                                    <h2>Step 1.</h2>
                                    <p>원하는 인프라 시설을 선택하여 검색합니다.</p>
                                </StepText>
                            </ExplainItem>

                            <ExplainItem>
                                <ImgWrap>
                                    <Img src="/map1-2.jpg">
                                        {/* <Image src="/map1-2.jpg" width={675} height={340} alt="map1-2"></Image> */}
                                    </Img>
                                </ImgWrap>
                                <StepText>
                                    <h2>Step 2.</h2>
                                    <p>붉게 표시된 지역에 마우스를 올려 해당 인프라 시설들이 모여있는 동을 확인합니다.</p>
                                </StepText>
                            </ExplainItem>
                        </ExplainItemWrap>

                        <ShortCutBtn part="town" onClick={mapBtn1}>
                            바로가기
                        </ShortCutBtn>
                    </ContentWrap>
                </ExplainWrap>

                <ExplainWrap ref={(el) => (tabPart.current[1] = el)} part="infra">
                    <ContentWrap>
                        <ExplainText>
                            <h2>인프라찾기란?</h2>
                            <p>
                                원하는 인프라 시설을 선택하여
                                <br />
                                해당 인프라 시설의 위치를 확인해보세요!
                            </p>
                        </ExplainText>

                        <ExplainItemWrap>
                            <ExplainItem>
                                <StepText>
                                    <h2>Step 1.</h2>
                                    <p>원하는 인프라 시설을 선택합니다.</p>
                                </StepText>
                                <ImgWrap>
                                    <Img src="/map2-1.jpg">
                                        {/* <Image src="/map2-1.jpg" width={675} height={340} alt="map2-1"></Image> */}
                                    </Img>
                                </ImgWrap>
                            </ExplainItem>

                            <ExplainItem>
                                <StepText>
                                    <h2>Step 2.</h2>
                                    <p>해당 시설의 위치가 표시되면 마커에 마우스를 올려 시설명을 확인합니다.</p>
                                </StepText>
                                <ImgWrap>
                                    <Img src="/map2-2.jpg">
                                        {/* <Image src="/map2-2.jpg" width={675} height={340} alt="map2-2"></Image> */}
                                    </Img>
                                </ImgWrap>
                            </ExplainItem>
                        </ExplainItemWrap>

                        <ShortCutBtn part="infra" onClick={mapBtn2}>
                            바로가기
                        </ShortCutBtn>
                    </ContentWrap>
                </ExplainWrap>
            </ExplainContainer>
        </LayOut>
    );
};

export default MainPage;
