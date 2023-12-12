import { WrapperProps } from "../types";

const Wrapper = (props: WrapperProps) => {
    return (
        <div className="w-full h-screen overflow-x-hidden overflow-y-auto mx-auto bg-no-repeat bg-auto bg-lightBackground bg-left-top bg-mobile-light md:bg-tablet-light lg:bg-desktop-light md:bg-cover">
            {props.children}
        </div>
    );
};

export default Wrapper;
