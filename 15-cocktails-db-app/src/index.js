import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CocktailsProvider from "./context/CocktailContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <CocktailsProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CocktailsProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
