import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/custom-bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar } from "./Navigation/Navbar";

function App() {
    return (
        <div>
            <Navbar />
        </div>
    );
}

export default App;
