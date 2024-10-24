import { Emblem } from "./Emblem";

export const DiffrentiaBody = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage:
                        "url(" +
                        "../../images/diffrentia/diffbackground.jpg" +
                        ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    paddingTop: "2rem",
                    minHeight: "100vh",
                }}
            >
                <div className="container">
                    <Emblem />

                    <div className="container">
                        <div className="text-center"></div>
                        <div className="p-2 mt-3">
                            <a href="https://play.google.com/store/apps/details?id=com.DragonshiftyStudios.Diffrentia">
                                <div className="text-center">
                                    <img
                                        src="/images/google-play-badge.png"
                                        alt=""
                                    />
                                </div>
                            </a>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 mt-2">
                            {/* Column One */}
                            <div className="col p-3">
                                <p className="d-flex justify-content-center text-justify special-elite-regular">
                                    Diffrentia is an old-fashioned-style card
                                    game that is easy to pick up and gives you
                                    strategic options, plus a weekly goal - to
                                    win for your chosen clan.<br></br>
                                    <br></br>
                                    Choose your favourite clan to battle for out
                                    of Cat, Fox, Falcon, and Dragon then gain
                                    the most points before 6pm every Sunday to
                                    win.
                                </p>
                            </div>
                            {/* Column Two */}
                            <div className="col p-3 anton-regular"></div>
                        </div>
                        <div className="container p-sm-0 p-lg-5">
                            <div className="iframe-container">
                                <iframe
                                    className="border border-3"
                                    src="https://www.youtube.com/embed/03R1yHnLjQc?si=bvu2J-TZzV6xY56M"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
