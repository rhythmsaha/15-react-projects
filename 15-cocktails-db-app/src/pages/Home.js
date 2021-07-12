import React, { useContext } from "react";
import CocktailsList from "../components/CocktailsList";
import Search from "../components/Search";
import { CocktailContext } from "../context/CocktailContext";
import classes from "./styles/Home.module.css";
import { BarLoader } from "react-spinners";

const Home = () => {
    const { isLoading } = useContext(CocktailContext);
    return (
        <div>
            <section className={classes.SearchSection}>
                <Search />
            </section>
            <section>
                <div className={classes.Heading}>
                    <h1>Cocktails</h1>
                </div>
                <div className={classes.CocktailsList}>
                    {isLoading && (
                        <div className={classes.Loading}>
                            <BarLoader
                                color={"#00AEFF"}
                                loading={isLoading}
                                size={15}
                            />
                        </div>
                    )}
                    {!isLoading && <CocktailsList />}
                </div>
            </section>
        </div>
    );
};

export default Home;
