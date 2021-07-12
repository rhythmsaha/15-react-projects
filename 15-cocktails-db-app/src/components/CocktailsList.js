import React, { useContext } from "react";
import { CocktailContext } from "../context/CocktailContext";
import Cocktail from "./Cocktail";
import classes from "./styles/CocktailsList.module.css";

const CocktailsList = () => {
    const { cocktails } = useContext(CocktailContext);
    return (
        <div className={classes.CocktailsList}>
            {cocktails.map((cocktail) => (
                <Cocktail key={cocktail.idDrink} item={cocktail} />
            ))}
        </div>
    );
};

export default CocktailsList;
