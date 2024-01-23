import { SubjectProps } from "../types";

const Subject = (props: SubjectProps) => {
    return (
        <div
            key={props.id}
            onClick={() =>
                props.onClickHandle && props.onClickHandle(props.title)
            }
            style={{
                boxShadow: "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
            }}
            className="group flex items-center p-3 gap-8 rounded-xl bg-white mb-3 md:mb-6 cursor-pointer border-4 border-white"
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
            <h4 className="text-[18px] md:text-[28px] font-medium text-darkNavy">
                {props.title}
            </h4>
        </div>
    );
};

export default Subject;
