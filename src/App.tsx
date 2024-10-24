import React from "react";

import "./App.css";
import "./styles/custom-bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar } from "./Navigation/Navbar";
import { BodyLayout } from "./Body/BodyLayout";
import { DiffrentiaBody } from "./Diffrentia/Components/DiffrentiaBody";

function App() {
    return (
        <div className="element">
            <Navbar />
            <BodyLayout />
            <DiffrentiaBody />
        </div>
    );
}

export default App;
