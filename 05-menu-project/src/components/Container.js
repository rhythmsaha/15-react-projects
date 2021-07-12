import React, { useState } from "react";
import classes from "./css/Container.module.css";
import Data from "../data";
import Categories from "./Categories";
import MenuItems from "./MenuItems";

const Container = () => {
    const [items, setItems] = useState(Data);
    const allCategories = [
        "all",
        ...new Set(Data.map((item) => item.category)),
    ];

    const filterItmes = (category) => {
        if (category === "all") {
            setItems(Data);
            return;
        }
        const newMenuItems = Data.filter((item) => item.category === category);
        setItems(newMenuItems);
    };

    return (
        <div className={classes.Container}>
            <div className={classes.PageTitle}>
                <h1>Our Menu</h1>
            </div>
            <div>
                <Categories
                    categories={allCategories}
                    itemChange={filterItmes}
                />
            </div>
            <div className={classes.Menu}>
                <MenuItems items={items} />
            </div>
        </div>
    );
};

export default Container;
