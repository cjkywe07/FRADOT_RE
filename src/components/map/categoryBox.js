import { CateTitle, Category, InfraBtnWrap } from "@/styles/map.styles";
import InfraBtn from "./infraBtn";

const CategoryBox = (props) => {
    const { title, infraList, plusNum, clickCnt, infraBtnRef, infraBtnClick, infraBtnColorCtrl } = props;

    return (
        <Category>
            <CateTitle>{title}</CateTitle>
            <InfraBtnWrap>
                {infraList.map((infra, idx) => (
                    <InfraBtn
                        key={idx}
                        idx={idx + plusNum}
                        infraName={infra}
                        clickCnt={clickCnt}
                        infraBtnRef={infraBtnRef}
                        infraBtnClick={infraBtnClick}
                        infraBtnColorCtrl={infraBtnColorCtrl}
                    />
                ))}
            </InfraBtnWrap>
        </Category>
    );
};

export default CategoryBox;
