import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./components/styles/style.css";
import Submenu from "./components/Submenu";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Submenu />
        </div>
    );
};

export default App;
