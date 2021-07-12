import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { links, social } from "../Data";
import { AppContext } from "../store/Context";
import styles from "./styles/sidebar.module.css";

const Sidebar = () => {
    const { isSidebarOpen, openSidebar, closeSidebar } = useContext(AppContext);

    return (
        <nav>
            <div className={styles.NavHeader}>
                <button onClick={openSidebar} className={styles.Toggler}>
                    <FaBars />
                </button>
            </div>

            <div
                className={
                    isSidebarOpen
                        ? `${styles.Sidebar} ${styles.SidebarOpen}`
                        : styles.Sidebar
                }
            >
                <div className={styles.SidebarHeader}>
                    <h3>Brand</h3>
                    <button onClick={closeSidebar}>
                        <AiOutlineClose />
                    </button>
                </div>
                <ul className={styles.NavLinks}>
                    {links.map((link) => {
                        return (
                            <li key={link.id}>
                                <a href="/">{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
                <ul className={styles.SocialLinks}>
                    {social.map((socialLink) => {
                        return (
                            <li key={socialLink.id}>
                                <a href={socialLink.url}>{socialLink.icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
