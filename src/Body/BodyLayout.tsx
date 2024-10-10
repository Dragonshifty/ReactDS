export const BodyLayout = () => {
    return (
        <div>
            <div className="container mt-3">
                <h3 className="mb-3 text-light">Tracks</h3>
                <div className="border border-primary p-5">
                    <h2>Column</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 text-primary">
                        <div className="col border border-primary p-3">One</div>
                        <div className="col border border-primary p-3">Two</div>
                        <div className="col border border-primary p-3">
                            Three
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
