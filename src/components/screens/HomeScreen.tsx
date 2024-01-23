import SubjectsContainer from "../common/SubjectsContainer";
import InfoSection from "../common/InfoSection";
import { useDispatch, useSelector } from "react-redux";
import { quizzActions } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { QuizzStoreTypes } from "../types";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: QuizzStoreTypes) => state.data);
    const navigate = useNavigate();

    const handleStartQuizz = (subject: string) => {
        dispatch(quizzActions.startQuizz(subject));
        navigate("/quizz");
    };

    return (
        <div className="xl:grid xl:grid-cols-2">
            <InfoSection screen="home" />
            <SubjectsContainer
                data={data}
                handleStartQuizz={handleStartQuizz}
            />
        </div>
    );
};

export default HomeScreen;
