import { AnswersContainerProps, Subject } from "../types/index";
import Answer from "./Answer";

const AnswersContainer = (props: AnswersContainerProps) => {
    return (
        <div>
            {props.data?.map((subject: Subject, key) => (
                <Answer
                    key={key}
                    id={key}
                    title={subject.title}
                    icon={subject.icon}
                />
            ))}
        </div>
    );
};

export default AnswersContainer;
