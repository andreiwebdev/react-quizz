import { WrapperProps } from "../types";

const AppContainer = (props: WrapperProps) => {
    return (
        <div className="container mx-auto py-16 px-6 xs:px-0 sm:max-w-3xl xl:max-w-6xl">
            {props.children}
        </div>
    );
};

export default AppContainer;
