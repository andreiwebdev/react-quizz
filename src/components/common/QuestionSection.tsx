import { useSelector } from "react-redux";
import { QuizzStoreTypes } from "../types";
import { LinearProgress } from "@mui/material";

const QuestionSection = () => {
    const questions = useSelector(
        (state: QuizzStoreTypes) => state.questionsData[0].questions
    );

    const questionIndex = useSelector(
        (state: QuizzStoreTypes) => state.questionIndex
    );

    const activeQuestion = useSelector(
        (state: QuizzStoreTypes) => state.activeQuestion
    );

    return (
        <div>
            <p className="italic text-[14px] md:text-[20px] text-greyNavy mb-3">
                Question {questionIndex + 1} of {questions.length}
            </p>
            <h3 className="text-[20px] md:text-[36px] font-medium mb-12 text-darkNavy xl:mb-28">
                {activeQuestion.question}
            </h3>
            <LinearProgress
                variant="determinate"
                className="mb-10 md:mb-16 bg-white !h-4 rounded-xl"
                value={(questionIndex + 1) * (100 / questions.length)}
                style={{ backgroundColor: "white" }}
                sx={{ backgroundColor: "purple" }}
            />
        </div>
    );
};

export default QuestionSection;