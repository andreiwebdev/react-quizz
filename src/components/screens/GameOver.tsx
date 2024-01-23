import { useDispatch, useSelector } from "react-redux";
import InfoSection from "../common/InfoSection";
import SubjectLabel from "../common/SubjectLabel";
import { QuizzStoreTypes } from "../types";
import { useNavigate } from "react-router-dom";
import { quizzActions } from "../../store/store";

const GameOver = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                <div
                    className="bg-white p-[32px] mb-3 rounded-xl text-center md:p-[48px] md:rounded-3xl md:mb-[32px]"
                    style={{
                        boxShadow:
                            "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
                    }}
                >
                    <SubjectLabel
                        title={quizzSubject.title}
                        icon={quizzSubject.icon}
                        extraClasses="p-0 !static flex justify-center items-center"
                    />
                    <div className="text-darkNavy font-bold text-[88px] mb-4 md:text-[144px]">
                        {score}
                    </div>
                    <div className="text-greyNavy text-[18px] md:text-[24px]">
                        out of {quizzSubject.questions.length}
                    </div>
                </div>
                <button
                    onClick={playAgain}
                    className="w-full bg-purple text-white p-[12px] md:p-[18px] rounded-xl md:rounded-3xl text-[18px] md:text-[28px] font-medium"
                >
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default GameOver;
