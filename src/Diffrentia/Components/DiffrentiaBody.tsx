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
                <div className="container   ">
                    <div className="d-flex justify-content-center mb-4 position-relative">
                        <img
                            className="img-fluid rotating-image position-absolute"
                            src="/images/diffrentia/quadouter.png"
                            height="300"
                            width="300"
                            alt=""
                            style={{ zIndex: 1 }}
                        />
                        <img
                            className="img-fluid"
                            src="/images/diffrentia/quadinner.png"
                            height="400"
                            width="400"
                            alt=""
                        />
                        <h1
                            className="cinzel-decorative-regular "
                            style={{ zIndex: 2 }}
                        >
                            Diffrentia
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};
