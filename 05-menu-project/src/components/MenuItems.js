import React from "react";
import classes from "./css/MenuItems.module.css";
import MenuItem from "./MenuItem";

const MenuItems = ({ items }) => {
    return (
        <div className={classes.menuList}>
            {items.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default MenuItems;
