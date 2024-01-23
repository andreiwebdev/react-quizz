const InfoSection = (props: { screen: string }) => {
    return (
        <>
            {props.screen === "home" ? (
                <div>
                    <h3 className="text-[40px] md:text-[64px] font-light mb-2 text-darkNavy dark:text-white">
                        Welcome to the
                    </h3>
                    <h3 className="text-[40px] md:text-[64px] font-medium mb-4 text-darkNavy dark:text-white">
                        Frontend Quiz!
                    </h3>
                    <p className="italic text-[14px] md:text-[20px] text-greyNavy mb-10 xl:mb-0 dark:text-lightBluish">
                        Pick a subject to get started.
                    </p>
                </div>
            ) : (
                <div>
                    <h3 className="text-[40px] md:text-[64px] font-light mb-2 text-darkNavy italic dark:text-white">
                        Quiz completed
                    </h3>
                    <h3 className="text-[40px] md:text-[64px] font-medium mb-10 text-darkNavy dark:text-lightBluish">
                        You scored...
                    </h3>
                </div>
            )}
        </>
    );
};

export default InfoSection;
