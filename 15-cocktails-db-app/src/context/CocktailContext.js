import React, { useEffect, useState } from "react";

export const CocktailContext = React.createContext({
    cocktails: [],
    isLoading: true,
});

const CocktailsProvider = ({ children }) => {
    const [state, setState] = useState({
        cocktails: [],
        isLoading: true,
    });

    const fetchFn = async () => {
        const response = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();
        if (data.drinks) {
            setState({
                cocktails: data.drinks,
                isLoading: false,
            });
        } else {
            setState([]);
        }
    };

    useEffect(() => {
        fetchFn().catch((err) => console.log(err.message));
    }, []);

    return (
        <CocktailContext.Provider
            value={{
                ...state,
            }}
        >
            {children}
        </CocktailContext.Provider>
    );
};

export default CocktailsProvider;
