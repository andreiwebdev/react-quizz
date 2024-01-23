import AnswersSection from "../common/AnswersSection";
import QuestionSection from "../common/QuestionSection";

const QuizzScreen = () => {
    return (
        <div className="xl:grid xl:grid-cols-2 gap-28">
            <QuestionSection />
            <AnswersSection />
        </div>
    );
};

export default QuizzScreen;
