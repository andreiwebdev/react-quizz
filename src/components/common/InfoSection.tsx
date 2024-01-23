const InfoSection = (props: { screen: string }) => {
    return (
        <>
            {props.screen === "home" ? (
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
            ) : (
                <div>
                    <h3 className="text-[40px] md:text-[64px] font-light mb-2 text-darkNavy italic">
                        Quiz completed
                    </h3>
                    <h3 className="text-[40px] md:text-[64px] font-medium mb-10 text-darkNavy">
                        You scored...
                    </h3>
                </div>
            )}
        </>
    );
};

export default InfoSection;
