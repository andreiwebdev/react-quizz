import IOSSwitch from "./IOSSwitch";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SubjectLabel from "./SubjectLabel";
import { QuizzStoreTypes } from "../types";
import { motion } from "framer-motion";

const Topbar = () => {
    const location = useLocation();
    const currentUrl = location.pathname;

    const { questionsData, isGameStarted } = useSelector(
        (state: QuizzStoreTypes) => ({
            questionsData: state.questionsData[0],
            isGameStarted: state.isGameStarted,
        })
    );

    return (
        <div className="flex items-center justify-between w-full h-10 mb-6 md:mb-32 relative">
            {currentUrl === "/quizz" && isGameStarted && (
                <SubjectLabel
                    title={questionsData.title}
                    icon={questionsData.icon}
                    extraClasses="p-0"
                />
            )}
            <motion.div
                className="flex items-center gap-4 absolute right-0 top-[19px] md:top-[28px]"
                initial={{ opacity: 0, scale: 0.5, y: 200 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <div className="dark:bg-icon-sun-light bg-icon-sun-dark w-[30px] h-[30px] bg-contain bg-no-repeat"></div>
                <IOSSwitch />
                <div className="dark:bg-icon-moon-light bg-icon-moon-dark w-[30px] h-[30px] bg-contain bg-no-repeat"></div>
            </motion.div>
        </div>
    );
};

export default Topbar;
