import MainViewUI from "./mainView.presenter";
import { useMovetoPage } from "@/components/common/hooks/useMoveToPage";
import { useEffect, useRef } from "react";

const MainView = () => {
    let { onClickMoveToPage } = useMovetoPage();

    let tabRef = useRef([]);
    let tabPartRef = useRef([]);
    let activeState = useRef([true, true]);
    const tabTitle = ["동네찾기 알아보기", "인프라찾기 알아보기"];

    const tabStyleChange = (idx, isActiveState) => {
        activeState.current[idx] = isActiveState;
        tabRef.current[idx].style.borderBottom = isActiveState ? "3px solid #756bff" : "";
        tabRef.current[idx].style.opacity = isActiveState ? "100%" : "20%";
    };

    useEffect(() => {
        let firstTabPartScrollY = 0;
        let secondTabPartScrollY = 0;
        let deviceWidth = window.innerWidth;

        // laptopM 이상
        if (deviceWidth >= 1280) {
            firstTabPartScrollY = 500;
            secondTabPartScrollY = 1541;
        }
        // laptopS
        else if (deviceWidth >= 1024) {
            firstTabPartScrollY = 500;
            secondTabPartScrollY = 1459;
        }
        // tablet
        else if (deviceWidth >= 768) {
            firstTabPartScrollY = 450;
            secondTabPartScrollY = 1760;
        }
        // mobileML
        else if (deviceWidth >= 375) {
            firstTabPartScrollY = 250;
            secondTabPartScrollY = 998;
        }
        // mobileS
        else {
            firstTabPartScrollY = 250;
            secondTabPartScrollY = 920;
        }

        window.addEventListener("scroll", function () {
            if (!(tabRef.current[0] && tabRef.current[1])) {
                return;
            }

            if (window.scrollY >= secondTabPartScrollY) {
                tabStyleChange(1, true);
                tabStyleChange(0, false);
            } else if (window.scrollY >= firstTabPartScrollY) {
                tabStyleChange(0, true);
                tabStyleChange(1, false);
            }
        });
    }, []);

    const tabColorCtrl = (e, activeState, isMouseOver) => {
        if (!activeState) {
            e.target.style.opacity = isMouseOver ? "100%" : "20%";
        }
    };

    return (
        <MainViewUI
            tabRef={tabRef.current}
            tabPartRef={tabPartRef.current}
            activeState={activeState.current}
            tabTitle={tabTitle}
            tabColorCtrl={tabColorCtrl}
            onClickMoveToPage={onClickMoveToPage}
        />
    );
};

export default MainView;
