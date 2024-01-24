import { useDispatch, useSelector } from "react-redux";
import Answer from "./Answer";
import { QuizzStoreTypes } from "../types";
import { quizzActions } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

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
        <motion.div variants={container} initial="hidden" animate="show">
            {question.options.map((option, key) => (
                <Answer key={key} id={key} answer={option} delay={key / 10} />
            ))}
            <motion.button
                onClick={handleAnswer}
                className={`w-full bg-purple text-white p-[12px] md:p-[18px] rounded-xl md:rounded-3xl text-[18px] md:text-[28px] font-medium ${
                    selectedAnswer.length > 1
                        ? ""
                        : "disabled:opacity-50 disabled:cursor-not-allowed dark:disabled:opacity-50 dark:disabled:cursor-not-allowed"
                }`}
                disabled={selectedAnswer.length > 1 ? false : true}
                transition={{ delay: question.options.length / 10 }}
                variants={{
                    hidden: { y: 50, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                }}
            >
                {isCorrectAnswer === null ? "Submit Answer" : "Next Question"}
            </motion.button>
        </motion.div>
    );
};

export default AnswersSection;
