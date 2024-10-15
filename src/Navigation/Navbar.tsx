export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <div className="container">
                <img
                    className="mx-2"
                    src="../images/Asset1.png"
                    alt="Logo"
                    width="35rem"
                    height="35rem"
                />
                <a href="#" className="navbar-brand">
                    Dragonshifty Studios
                </a>
                <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    className="navbar-toggler"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
