import React, { useContext } from "react";
import { GlobalContext } from "../store/Global-Context";
import classes from "./styles/MenuOverlay.module.css";
import { AiOutlineClose } from "react-icons/ai";
import sublinks from "../Data";
const MenuOverlay = () => {
    const { closeMenu } = useContext(GlobalContext);

    return (
        <div className={classes.Backdrop}>
            <div className={classes.MenuOverlay}>
                <div className={classes.MenuWrapper}>
                    <span onClick={closeMenu} className={classes.CloseBtn}>
                        <AiOutlineClose />
                    </span>
                    {sublinks.map((link, index) => {
                        return (
                            <div key={index} className={classes.Category}>
                                <span className={classes.CatName}>
                                    {link.page}
                                </span>
                                <div className={classes.Sublinks}>
                                    {link.links.map((sublink, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className={classes.Link}
                                            >
                                                <a href="/">
                                                    <span
                                                        className={classes.Icon}
                                                    >
                                                        {sublink.icon}
                                                    </span>
                                                    {sublink.label}
                                                </a>
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MenuOverlay;
