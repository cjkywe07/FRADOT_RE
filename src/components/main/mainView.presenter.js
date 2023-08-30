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

const MainViewUI = (props) => {
    const { tabRef, tabPartRef, activeState, tabTitle, tabColorCtrl, onClickMoveToPage } = props;

    return (
        <LayOut>
            <TopContainer>
                <Ocean>
                    <Wave />
                    <Wave />
                </Ocean>
                <Cover />
                <Text>
                    <h1>내 주변의 모든 것, 프라닷</h1>
                    <div>
                        <p>내가 원하는 인프라를 갖춘 동네를,</p>
                        <p>우리 동네에 있는 인프라를 한 눈에 살펴보세요</p>
                    </div>
                </Text>
            </TopContainer>

            <ExplainContainer>
                <ExpalinTab>
                    {tabTitle.map((title, idx) => (
                        <Tab
                            key={idx}
                            ref={(el) => (tabRef[idx] = el)}
                            onMouseOver={(e) => tabColorCtrl(e, activeState[idx], 1)}
                            onMouseOut={(e) => tabColorCtrl(e, activeState[idx], 0)}
                            onClick={() => tabPartRef[idx].scrollIntoView({ behavior: "smooth" })}
                        >
                            {title}
                        </Tab>
                    ))}
                </ExpalinTab>

                <ExplainWrap ref={(el) => (tabPartRef[0] = el)} isDongFind>
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
                                <ImgWrap isFirstPart>
                                    <Img src="/map1_1.jpg" />
                                </ImgWrap>

                                <StepText isFirstPart>
                                    <h2>Step 1.</h2>
                                    <p>원하는 인프라 시설을 선택하여 검색합니다.</p>
                                </StepText>
                            </ExplainItem>

                            <ExplainItem>
                                <ImgWrap isFirstPart>
                                    <Img src="/map1_2.jpg" />
                                </ImgWrap>

                                <StepText isFirstPart>
                                    <h2>Step 2.</h2>
                                    <p>
                                        붉게 표시된 지역에 마우스를 올려
                                        <br />
                                        해당 인프라 시설들이 모여있는 동을 확인합니다.
                                    </p>
                                </StepText>
                            </ExplainItem>
                        </ExplainItemWrap>

                        <ShortCutBtn onClick={onClickMoveToPage("/map1")} isDongFind>
                            바로가기
                        </ShortCutBtn>
                    </ContentWrap>
                </ExplainWrap>

                <ExplainWrap ref={(el) => (tabPartRef[1] = el)}>
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
                                <ImgWrap>
                                    <Img src="/map2_1.jpg" />
                                </ImgWrap>

                                <StepText>
                                    <h2>Step 1.</h2>
                                    <p>원하는 인프라 시설을 선택합니다.</p>
                                </StepText>
                            </ExplainItem>

                            <ExplainItem>
                                <ImgWrap>
                                    <Img src="/map2_2.jpg" />
                                </ImgWrap>

                                <StepText>
                                    <h2>Step 2.</h2>
                                    <p>
                                        해당 시설의 위치가 표시되면
                                        <br />
                                        마커에 마우스를 올려 시설명을 확인합니다.
                                    </p>
                                </StepText>
                            </ExplainItem>
                        </ExplainItemWrap>

                        <ShortCutBtn onClick={onClickMoveToPage("/map2")}>바로가기</ShortCutBtn>
                    </ContentWrap>
                </ExplainWrap>
            </ExplainContainer>
        </LayOut>
    );
};

export default MainViewUI;
