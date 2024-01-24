import { useDispatch, useSelector } from "react-redux";
import InfoSection from "../common/InfoSection";
import SubjectLabel from "../common/SubjectLabel";
import { QuizzStoreTypes } from "../types";
import { useNavigate } from "react-router-dom";
import { quizzActions } from "../../store/store";
import { motion } from "framer-motion";
import ConfettiExplosion from "react-confetti-explosion";
import { useState } from "react";

const confettiConfig = {
    duration: 3000,
    particleCount: 250,
    width: 1600,
};

const GameOver = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showConfetti, setShowConfetti] = useState(true);

    const quizzSubject = useSelector(
        (state: QuizzStoreTypes) => state.questionsData[0]
    );

    const score = useSelector((state: QuizzStoreTypes) => state.score);

    const playAgain = () => {
        navigate("/");
        dispatch(quizzActions.playAgain());
    };

    return (
        <div className="xl:grid xl:grid-cols-2 gap-28">
            <InfoSection screen="game-over" />
            <div>
                <motion.div
                    className="bg-white p-[32px] mb-3 rounded-xl text-center md:p-[48px] md:rounded-3xl md:mb-[32px] shadow-card-light dark:bg-navy dark:shadow-card-dark"
                    initial={{ opacity: 0, scale: 0.5, y: 200 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                >
                    <SubjectLabel
                        title={quizzSubject.title}
                        icon={quizzSubject.icon}
                        extraClasses="p-0 !static flex justify-center items-center"
                    />
                    <div className="text-darkNavy font-bold text-[88px] mb-4 md:text-[144px] dark:text-white">
                        {score}
                    </div>
                    <div className="text-greyNavy text-[18px] md:text-[24px] dark:text-lightBluish">
                        out of {quizzSubject.questions.length}
                    </div>
                </motion.div>
                <motion.button
                    onClick={playAgain}
                    className="w-full bg-purple text-white p-[12px] md:p-[18px] rounded-xl md:rounded-3xl text-[18px] md:text-[28px] font-medium"
                    transition={{ delay: 0.7 }}
                    initial={{ opacity: 0, scale: 0.5, y: 200 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                >
                    Play Again
                </motion.button>
            </div>
            {showConfetti && (
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center -z-[1]">
                    <ConfettiExplosion
                        onComplete={() => setShowConfetti(false)}
                        {...confettiConfig}
                    />
                </div>
            )}
        </div>
    );
};

export default GameOver;
