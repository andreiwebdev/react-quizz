import { useDispatch, useSelector } from "react-redux";
import Answer from "./Answer";
import { QuizzStoreTypes } from "../types";
import { quizzActions } from "../../store/store";
import { useNavigate } from "react-router-dom";

const AnswersSection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const question = useSelector(
        (state: QuizzStoreTypes) => state.activeQuestion
    );

    const selectedAnswer = useSelector(
        (state: QuizzStoreTypes) => state.selectedAnswer.answer
    );

    const isCorrectAnswer = useSelector(
        (state: QuizzStoreTypes) => state.isCorrectAnswer
    );

    const questionIndex = useSelector(
        (state: QuizzStoreTypes) => state.questionIndex
    );

    const handleAnswer = () => {
        if (isCorrectAnswer === null) {
            dispatch(quizzActions.submitAnswer());
        } else if (isCorrectAnswer !== null) {
            if (questionIndex === 9) {
                navigate("/game-over");
            } else {
                dispatch(quizzActions.nextQuestion());
            }
        }
    };

    return (
        <div>
            {question.options.map((option, key) => (
                <Answer key={key} id={key} answer={option} />
            ))}
            <button
                onClick={handleAnswer}
                className={`w-full bg-purple text-white p-[12px] md:p-[18px] rounded-xl md:rounded-3xl text-[18px] md:text-[28px] font-medium ${
                    selectedAnswer.length > 1
                        ? ""
                        : "disabled:opacity-50 disabled:cursor-not-allowed"
                }`}
                disabled={selectedAnswer.length > 1 ? false : true}
            >
                {isCorrectAnswer === null ? "Submit Answer" : "Next Question"}
            </button>
        </div>
    );
};

export default AnswersSection;
