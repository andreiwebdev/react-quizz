import IOSSwitch from "./IOSSwitch";
import { iconMoonDark, iconSunDark } from "../../assets/images/index";

const Topbar = () => {
    return (
        <div className="flex items-center justify-end w-full h-10 mb-6 md:mb-10 xl:mb-32">
            <div className="flex items-center gap-4">
                <img src={iconSunDark} alt="icon-sun-light" />
                <IOSSwitch />
                <img src={iconMoonDark} alt="icon-moon-light" />
            </div>
        </div>
    );
};

export default Topbar;
