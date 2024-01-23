import { useDispatch, useSelector } from "react-redux";
import { AnswerProps, QuizzStoreTypes } from "../types";
import { quizzActions } from "../../store/store";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

const Answer = (props: AnswerProps) => {
    const dispatch = useDispatch();

    const answerData = useSelector(
        (state: QuizzStoreTypes) => state.selectedAnswer
    );

    const isCorrectAnswer = useSelector(
        (state: QuizzStoreTypes) => state.isCorrectAnswer
    );

    const activeQuestion = useSelector(
        (state: QuizzStoreTypes) => state.activeQuestion
    );

    const onClickHandle = (answer: string) => {
        let correctAnswerIndex = activeQuestion.options.indexOf(
            activeQuestion.answer
        );
        dispatch(
            quizzActions.selectAnswer({
                id: props.id,
                answer: answer,
                correctAnswerIndex,
            })
        );
    };

    const letters = ["A", "B", "C", "D"];

    let containerExtraClasses = "";
    let iconExtraClasses = " group-hover:bg-[#F6E7FF] group-hover:text-purple";
    if (answerData.id === props.id && isCorrectAnswer === null) {
        containerExtraClasses = " !border-purple";
        iconExtraClasses = " bg-purple text-white";
    } else if (answerData.id === props.id && isCorrectAnswer === true) {
        containerExtraClasses = " !border-green-400";
        iconExtraClasses = " bg-green-400 text-white";
    } else if (answerData.id === props.id && isCorrectAnswer === false) {
        containerExtraClasses = " !border-red-400";
        iconExtraClasses = " bg-red-400 text-white";
    }

    if (isCorrectAnswer !== null) {
        containerExtraClasses += " pointer-events-none";
        iconExtraClasses += " pointer-events-none";
    }

    return (
        <div
            key={props.id}
            onClick={() => onClickHandle && onClickHandle(props.answer)}
            style={{
                boxShadow: "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
            }}
            className={
                "group flex items-center p-3 gap-8 rounded-xl bg-white mb-3 md:mb-6 cursor-pointer border-2 border-white" +
                containerExtraClasses
            }
        >
            <div
                className={
                    "w-10 md:w-[56px] h-10 md:h-[56px] rounded-lg flex flex-col items-center justify-center bg-lightBackground " +
                    iconExtraClasses
                }
            >
                <div className="text-[18px] md:text-[28px] font-medium">
                    {letters[Number(props.id)]}
                </div>
            </div>
            <div className="w-full flex items-center justify-between">
                <h4 className="text-[18px] md:text-[28px] font-medium text-darkNavy">
                    {props.answer}
                </h4>
                {isCorrectAnswer && props.id === answerData.id && (
                    <FaRegCheckCircle className="text-green-400 text-2xl" />
                )}
                {isCorrectAnswer === false && props.id === answerData.id && (
                    <FaRegCircleXmark className="text-red-400 text-2xl" />
                )}
                {isCorrectAnswer === false &&
                    props.id === answerData.correctAnswerIndex && (
                        <FaRegCheckCircle className="text-green-400 text-2xl" />
                    )}
            </div>
        </div>
    );
};

export default Answer;
