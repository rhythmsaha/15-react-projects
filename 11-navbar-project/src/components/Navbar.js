import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../Data";

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false);

    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (isToggled) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = "0px";
        }
    }, [isToggled]);

    const ToggleAction = () => {
        setIsToggled((prev) => !prev);
    };

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h3>Coding Addict</h3>
                    <button className="nav-toggle" onClick={ToggleAction}>
                        <FaBars />
                    </button>
                </div>

                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <ul className="social-icons">
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
