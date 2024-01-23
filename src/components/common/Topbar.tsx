import IOSSwitch from "./IOSSwitch";
import { iconMoonDark, iconSunDark } from "../../assets/images/index";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SubjectLabel from "./SubjectLabel";
import { QuizzStoreTypes } from "../types";

const Topbar = () => {
    const quizzSubject = useSelector(
        (state: QuizzStoreTypes) => state.questionsData[0]
    );
    const isGameStarted = useSelector(
        (state: QuizzStoreTypes) => state.isGameStarted
    );
    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="flex items-center justify-between w-full h-10 mb-6 md:mb-32 relative">
            {(currentUrl === "/quizz" && isGameStarted) ||
                (currentUrl === "/game-over" && (
                    <SubjectLabel
                        title={quizzSubject.title}
                        icon={quizzSubject.icon}
                        extraClasses="p-0"
                    />
                ))}
            <div className="flex items-center gap-4 absolute right-0 top-[19px] md:top-[28px]">
                <img src={iconSunDark} alt="icon-sun-light" />
                <IOSSwitch />
                <img src={iconMoonDark} alt="icon-moon-light" />
            </div>
        </div>
    );
};

export default Topbar;
