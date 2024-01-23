import { SubjectProps } from "../types";

const Subject = (props: SubjectProps) => {
    return (
        <div
            key={props.id}
            onClick={() =>
                props.onClickHandle && props.onClickHandle(props.title)
            }
            className="group flex items-center shadow-card-light p-3 gap-8 rounded-xl bg-white mb-3 md:mb-6 cursor-pointer border-4 border-white dark:bg-navy dark:border-navy dark:shadow-card-dark"
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
        </div>
    );
};

export default Subject;
