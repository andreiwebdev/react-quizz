import { useSelector } from "react-redux";
import { QuizzStoreTypes, WrapperProps } from "../types";

const Wrapper = (props: WrapperProps) => {
    const darkMode = useSelector((state: QuizzStoreTypes) => state.darkMode);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div
                className={`w-full h-screen overflow-x-hidden overflow-y-auto mx-auto bg-no-repeat bg-auto bg-lightBackground bg-left-top bg-mobile-light md:bg-tablet-light lg:bg-desktop-light md:bg-cover dark:bg-darkNavy dark:bg-mobile-dark dark:md:bg-tablet-dark dark:lg:bg-desktop-dark`}
            >
                {props.children}
            </div>
        </div>
    );
};

export default Wrapper;
