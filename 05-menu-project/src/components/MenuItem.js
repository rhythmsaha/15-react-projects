import React from "react";
import classes from "./css/MenuItem.module.css";

const MenuItem = ({ item }) => {
    return (
        <div className={classes.Item}>
            <div className={classes.Image}>
                <img src={item.img} alt="" />
            </div>
            <div className={classes.itemInfo}>
                <div className={classes.itemHeader}>
                    <div>{item.title}</div>
                    <div>$ {item.price}</div>
                </div>
                <div className={classes.ItemDetails}>{item.desc}</div>
            </div>
        </div>
    );
};

export default MenuItem;
