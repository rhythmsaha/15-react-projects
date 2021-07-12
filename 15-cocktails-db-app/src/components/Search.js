import React from "react";
import classes from "./styles/Search.module.css";

const Search = () => {
    return (
        <div className={classes.SearchCard}>
            <div className={classes.SearchForm}>
                <label htmlFor="search">Search Your Favorite Cocktail</label>
                <input type="search" id="search" />
            </div>
        </div>
    );
};

export default Search;
