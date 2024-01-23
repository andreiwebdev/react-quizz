import { WrapperProps } from "../types";

const AppContainer = (props: WrapperProps) => {
    return (
        <div className="container mx-auto py-16 px-6 xl:px-0 xs:px-0 sm:max-w-3xl xl:max-w-7xl">
            {props.children}
        </div>
    );
};

export default AppContainer;
