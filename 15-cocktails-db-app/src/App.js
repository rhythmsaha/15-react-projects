import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";
const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/details/:id" exact>
                    <Details />
                </Route>
                <Route path="*">
                    <h1>404 Not Found</h1>
                </Route>
            </Switch>
        </>
    );
};

export default App;
