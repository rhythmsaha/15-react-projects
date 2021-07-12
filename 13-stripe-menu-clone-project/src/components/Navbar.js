import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import Button from "./Button";
import Data from "../Data";
import classes from "./styles/Navbar.module.css";
import { GlobalContext } from "../store/Global-Context";
import MenuOverlay from "./MenuOverlay";

function Navbar() {
    const { isMenuOpen, isSubmenuOpen, showMenu, openSubmenu, closeSubMenu } =
        useContext(GlobalContext);

    const displaySubmenu = (event) => {
        const page = event.target.textContent;
        const tempBtn = event.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, { center, bottom });
    };

    const closeTheSubMenu = () => {
        if (isSubmenuOpen) {
            closeSubMenu();
        } else {
            return;
        }
    };

    return (
        <>
            <nav onClick={closeTheSubMenu}>
                <div className={classes.Navbar}>
                    <div className={classes.NavHeader}>
                        <div>
                            <img
                                src="https://raw.githubusercontent.com/john-smilga/react-projects/master/13-stripe-submenus/setup/src/images/logo.svg"
                                alt="stripe"
                            />
                        </div>
                        <div className={classes.Toggler} onClick={showMenu}>
                            <FaBars />
                        </div>
                    </div>
                    <div className={classes.NavLinks}>
                        <ul>
                            {Data.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <button onClick={displaySubmenu}>
                                            {link.page}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={classes.SignIn}>
                        <Button>Sign In</Button>
                    </div>
                </div>
            </nav>
            {isMenuOpen && <MenuOverlay />}
        </>
    );
}

export default Navbar;
