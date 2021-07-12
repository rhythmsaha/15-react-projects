import React from "react";
import classes from "./styles/CocktailDetail.module.css";

const CocktailDetail = (props) => {
    const {
        strDrinkThumb,
        strDrink,
        strCategory,
        strAlcoholic,
        strGlass,
        strInstructions,
    } = props[0];

    return (
        <div className={classes.Main}>
            <div className={classes.Name}>{strDrink}</div>
            <div className={classes.Image}>
                <img src={strDrinkThumb} alt="" />
            </div>
            <div className={classes.Category}>{strCategory}</div>
            <div className={classes.Alcoholic}>{strAlcoholic}</div>
            <div className={classes.Glass}>{strGlass}</div>
            <div className={classes.Instructions}>{strInstructions}</div>
            <div className={classes.Ingredients}>{strInstructions}</div>
        </div>
    );
};

export default CocktailDetail;
