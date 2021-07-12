import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import CocktailDetail from "../components/CocktailDetail";
import { CocktailContext } from "../context/CocktailContext";
import classes from "./styles/Details.module.css";

const Details = () => {
    const { id } = useParams();
    const { isLoading, cocktails } = useContext(CocktailContext);
    const Filtered = cocktails.filter((cocktail) => cocktail.idDrink === id);

    return (
        <div className={classes.Main}>
            <div className={classes.Heading}>
                <h1>Product Details</h1>
            </div>

            <SyncLoader loading={isLoading} />
            {!isLoading && <CocktailDetail {...Filtered} />}
        </div>
    );
};

export default Details;
