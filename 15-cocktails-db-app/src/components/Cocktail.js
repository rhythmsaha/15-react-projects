import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./styles/Cocktail.module.css";

const Cocktail = ({ item }) => {
    const history = useHistory();

    const { strDrinkThumb, strDrink, strGlass, strAlcoholic, idDrink } = item;

    const goToDetails = () => {
        history.push(`/details/${idDrink}`);
    };
    return (
        <div className={classes.Card}>
            <div className={classes.Photo}>
                <img src={strDrinkThumb} alt="" />
            </div>
            <div className={classes.Details}>
                <div className={classes.Name}>{strDrink}</div>
                <div className={classes.Glass}>{strGlass}</div>
                <div className={classes.Alcoholic}>{strAlcoholic}</div>
            </div>
            <div className={classes.button}>
                <button onClick={goToDetails}>Details</button>
            </div>
        </div>
    );
};

export default Cocktail;
