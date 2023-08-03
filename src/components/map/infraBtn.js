import { Infra } from "@/styles/map1.styles";

const InfraBtn = (props) => {
    const { idx, infraName, clickCnt, infraBtnRef, infraBtnClick, handleMouseOver, handleMouseOut } = props;

    return (
        <Infra
            ref={(el) => (infraBtnRef.current[idx] = el)}
            onClick={() => infraBtnClick(idx)}
            onMouseOver={(e) => handleMouseOver(e, clickCnt.current[idx])}
            onMouseOut={(e) => handleMouseOut(e, clickCnt.current[idx])}
        >
            {infraName}
        </Infra>
    );
};

export default InfraBtn;
