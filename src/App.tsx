import { useEffect, useState } from "react";
import IOSSwitch from "./components/IOSSwitch";
import { iconMoonDark, iconSunDark } from "./assets/images/index";
import { Subject } from "./components/types";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/src/assets/data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson.quizzes);
                console.log(data);
            });
    }, []);

    return (
        <div className="w-full h-screen overflow-x-hidden overflow-y-auto mx-auto bg-no-repeat bg-auto bg-lightBackground bg-left-top bg-mobile-light md:bg-tablet-light lg:bg-desktop-light md:bg-cover">
            <div className="container mx-auto py-16 px-6 xs:px-0 sm:max-w-3xl xl:max-w-6xl">
                {/* TopBar */}
                <div className="flex items-center justify-end w-full h-10 mb-6 md:mb-10 xl:mb-32">
                    <div className="flex items-center gap-4">
                        <img src={iconSunDark} alt="icon-sun-light" />
                        <IOSSwitch />
                        <img src={iconMoonDark} alt="icon-moon-light" />
                    </div>
                </div>
                {/* Main */}
                <div className="xl:grid xl:grid-cols-2">
                    {/* left side */}
                    <div>
                        <h3 className="text-[40px] md:text-[64px] font-light mb-2 text-darkNavy">
                            Welcome to the
                        </h3>
                        <h3 className="text-[40px] md:text-[64px] font-medium mb-4 text-darkNavy">
                            Frontend Quiz!
                        </h3>
                        <p className="italic text-[14px] md:text-[20px] text-greyNavy mb-10 xl:mb-0">
                            Pick a subject to get started.
                        </p>
                    </div>
                    {/* right side */}
                    <div>
                        {/* box */}
                        {data?.map((subject: Subject, key) => (
                            <div
                                key={key}
                                style={{
                                    boxShadow:
                                        "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
                                }}
                                className="flex items-center p-3 gap-8 rounded-xl bg-white mb-3 md:mb-6 last:mb- cursor-pointer"
                            >
                                <div
                                    className={
                                        "w-10 md:w-[56px] h-10 md:h-[56px] rounded-lg flex flex-col items-center justify-center " +
                                        "bg-" +
                                        subject.title
                                    }
                                >
                                    <img
                                        src={subject.icon}
                                        alt={`${subject.icon} icon`}
                                        className="w-[28px] md:w-[40px]"
                                    />
                                </div>
                                <h4 className="text-[18px] md:text-[28px] font-medium text-darkNavy">
                                    {subject.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
