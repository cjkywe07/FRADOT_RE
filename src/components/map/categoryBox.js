import { CateTitle, Category } from "@/styles/map1.styles";
import InfraBtn from "./infraBtn";

const CategoryBox = (props) => {
    const { title, infraList, plusNum, clickCnt, infraBtnRef, infraBtnClick, handleMouseOver, handleMouseOut } = props;

    return (
        <Category>
            <CateTitle>{title}</CateTitle>
            {infraList.map((infra, idx) => (
                <InfraBtn
                    key={idx}
                    idx={idx + plusNum}
                    infraName={infra}
                    clickCnt={clickCnt}
                    infraBtnRef={infraBtnRef}
                    infraBtnClick={infraBtnClick}
                    handleMouseOver={handleMouseOver}
                    handleMouseOut={handleMouseOut}
                />
            ))}
        </Category>
    );
};

export default CategoryBox;
