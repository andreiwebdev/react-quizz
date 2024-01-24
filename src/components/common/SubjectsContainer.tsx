import { motion } from "framer-motion";
import { SubjectsContainerProps } from "../types/index";
import Subject from "./Subject";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const SubjectsContainer = (props: SubjectsContainerProps) => {
    return (
        <motion.div variants={container} initial="hidden" animate="show">
            {props.data?.map((subject, key: number) => (
                <Subject
                    key={key}
                    title={subject.title}
                    icon={subject.icon}
                    onClickHandle={props.handleStartQuizz}
                    delay={key / 10}
                />
            ))}
        </motion.div>
    );
};

export default SubjectsContainer;
