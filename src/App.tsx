import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/custom-bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar } from "./Navigation/Navbar";
import { BodyLayout } from "./Body/BodyLayout";

function App() {
    return (
        <div className="element">
            <Navbar />
            <BodyLayout />
        </div>
    );
}

export default App;
