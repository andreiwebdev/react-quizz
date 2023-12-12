import { useEffect, useState } from "react";
import AnswersContainer from "../common/AnswersContainer";
import QuestionsContainer from "../common/QuestionsContainer";

const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/src/assets/data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson.quizzes);
            });
    }, []);

    return (
        <div className="xl:grid xl:grid-cols-2">
            <QuestionsContainer />
            <AnswersContainer data={data} />
        </div>
    );
};

export default Main;
