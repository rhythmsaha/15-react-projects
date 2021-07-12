import React from "react";
import classes from "./css/Categories.module.css";

const Categories = ({ categories, itemChange }) => {
    return (
        <div className={classes.Categories}>
            {categories.map((category, index) => {
                return (
                    <span key={index} className={classes.CategoryBtn}>
                        <button
                            onClick={() => {
                                itemChange(category);
                            }}
                        >
                            {category}
                        </button>
                    </span>
                );
            })}
        </div>
    );
};

export default Categories;
