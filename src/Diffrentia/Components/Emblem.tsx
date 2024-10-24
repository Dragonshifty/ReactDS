export const Emblem = () => {
    return (
        <div className="d-flex justify-content-center  position-relative">
            <img
                className="img-fluid rotating-image position-absolute"
                src="/images/diffrentia/quadouter.png"
                height="250"
                width="250"
                alt=""
                style={{ zIndex: 1 }}
            />
            <img
                className="img-fluid"
                src="/images/diffrentia/quadinner.png"
                height="350"
                width="350"
                alt=""
            />
            <h1 className="cinzel-decorative-header " style={{ zIndex: 2 }}>
                Diffrentia
            </h1>
        </div>
    );
};
