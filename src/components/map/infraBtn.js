import { Infra } from "@/styles/map.styles";

const InfraBtn = (props) => {
    const { idx, infraName, clickCnt, infraBtnRef, infraBtnClick, infraBtnColorCtrl } = props;

    return (
        <Infra
            ref={(el) => (infraBtnRef.current[idx] = el)}
            onClick={() => infraBtnClick(idx)}
            onMouseOver={(e) => infraBtnColorCtrl(e, clickCnt.current[idx], 1)}
            onMouseOut={(e) => infraBtnColorCtrl(e, clickCnt.current[idx], 0)}
        >
            {infraName}
        </Infra>
    );
};

export default InfraBtn;
