import { SubjectsContainerProps, SubjectProps } from "../types/index";
import Subject from "./Subject";

const SubjectsContainer = (props: SubjectsContainerProps) => {
    return (
        <div>
            {props.data?.map((subject: SubjectProps, key) => (
                <Subject
                    key={key}
                    title={subject.title}
                    icon={subject.icon}
                    onClickHandle={props.handleStartQuizz}
                />
            ))}
        </div>
    );
};

export default SubjectsContainer;
