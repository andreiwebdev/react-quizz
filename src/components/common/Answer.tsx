import { useDispatch, useSelector } from "react-redux";
import { AnswerProps, QuizzStoreTypes } from "../types";
import { quizzActions } from "../../store/store";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { motion } from "framer-motion";

const answerVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

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
    let iconExtraClasses =
        " group-hover:bg-[#F6E7FF] group-hover:text-purple dark:group-hover:bg-[#F6E7FF] dark:group-hover:text-purple ";
    if (answerData.id === props.id && isCorrectAnswer === null) {
        containerExtraClasses = " !border-purple";
        iconExtraClasses =
            " bg-purple text-white dark:bg-purple dark:!text-white ";
    } else if (answerData.id === props.id && isCorrectAnswer === true) {
        containerExtraClasses = " !border-green-400";
        iconExtraClasses = " !bg-green-400 !text-white";
    } else if (answerData.id === props.id && isCorrectAnswer === false) {
        containerExtraClasses = " !border-red-400";
        iconExtraClasses = " !bg-red-400 !text-white";
    }

    if (isCorrectAnswer !== null) {
        containerExtraClasses += " pointer-events-none";
        iconExtraClasses += " pointer-events-none";
    }

    return (
        <motion.div
            key={props.id}
            onClick={() => onClickHandle && onClickHandle(props.answer)}
            className={
                "group flex items-center p-3 gap-8 rounded-xl bg-white mb-3 md:mb-6 cursor-pointer border-2 border-white shadow-card-light dark:bg-navy dark:border-navy dark:shadow-card-dark relative pr-6 " +
                containerExtraClasses
            }
            variants={answerVariants}
            transition={{ delay: props.delay }}
            whileHover={{
                scale: 1.03,
                transition: { duration: 0.1, delay: 0 },
            }}
        >
            <div
                className={
                    "w-10 min-w-[2.5rem] md:w-[56px] h-10 md:h-[56px] md:min-w-[56px] rounded-lg flex flex-col items-center justify-center bg-lightBackground dark:bg-lightGray dark:text-greyNavy " +
                    iconExtraClasses
                }
            >
                <div className="text-[18px] md:text-[28px] font-medium">
                    {letters[Number(props.id)]}
                </div>
            </div>
            <div className="w-full flex items-center justify-between">
                <h4 className="text-[18px] md:text-[28px] font-medium text-darkNavy dark:text-white">
                    {props.answer}
                </h4>
                {isCorrectAnswer && props.id === answerData.id && (
                    <FaRegCheckCircle className="text-green-400 text-2xl absolute right-2" />
                )}
                {isCorrectAnswer === false && props.id === answerData.id && (
                    <FaRegCircleXmark className="text-red-400 text-2xl absolute right-2" />
                )}
                {isCorrectAnswer === false &&
                    props.id === answerData.correctAnswerIndex && (
                        <FaRegCheckCircle className="text-green-400 text-2xl absolute right-2" />
                    )}
            </div>
        </motion.div>
    );
};

export default Answer;
