import React from "react";
import classes from "./styles/Header.module.css";
import Logo from "./images/logo.png";
import { NavLink, useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    return (
        <header>
            <div className={classes.Logo}>
                <img src={Logo} alt="" onClick={() => history.push("/")} />
            </div>
            <nav>
                <NavLink to="/" exact activeClassName={classes.Active}>
                    Home
                </NavLink>
                <NavLink to="/about" activeClassName={classes.Active}>
                    about
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
