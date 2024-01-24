import { motion } from "framer-motion";
import { SubjectLabelProps } from "../types";

const SubjectLabel = (props: SubjectLabelProps) => {
    return (
        <motion.div
            className={
                "flex items-center p-3 gap-8 rounded-xl absolute top-0 left-0 " +
                props.extraClasses
            }
            initial={{ opacity: 0, scale: 0.5, y: 200 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <div
                className={
                    "w-10 md:w-[56px] h-10 md:h-[56px] rounded-lg flex flex-col items-center justify-center " +
                    "bg-" +
                    props.title
                }
            >
                <img
                    src={props.icon}
                    alt={`${props.icon} icon`}
                    className="w-[28px] md:w-[40px]"
                />
            </div>
            <h4 className="text-[18px] md:text-[28px] font-medium text-darkNavy dark:text-white">
                {props.title}
            </h4>
        </motion.div>
    );
};

export default SubjectLabel;
