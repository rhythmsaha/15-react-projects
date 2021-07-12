import React, { useEffect, useRef, useState } from "react";
import styles from "./css/GroceryBud.module.css";
import Grocery from "./Grocery";

const GroceryBud = () => {
    const [input, setInput] = useState("");
    const [groceries, setGroceries] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);

    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        if (isEditing && input) {
            const newitem = groceries.map((g) => {
                if (g.id === editID) {
                    return { ...g, item: input };
                }

                return g;
            });
            setGroceries(newitem);
        } else {
            const newGrocery = {
                id: new Date().toJSON(),
                item: input,
            };
            setGroceries([...groceries, newGrocery]);
        }
        setInput("");
        setEditID(null);
        setIsEditing(false);
    };

    const isFirstRun = useRef(true);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        localStorage.setItem("groceries", JSON.stringify(groceries));
    }, [groceries]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("groceries"));
        if (storedItems) {
            setGroceries(storedItems);
            return;
        }
    }, []);

    const DeleteItemHandler = (id) => {
        const newGroceries = groceries.filter((grocery) => grocery.id !== id);
        setGroceries(newGroceries);
    };

    const editHandler = (id) => {
        const editableItem = groceries.find((grocery) => grocery.id === id);
        setIsEditing(true);
        setInput(editableItem.item);
        setEditID(id);
    };

    const clearHandler = () => {
        setGroceries([]);
        localStorage.clear();
    };

    return (
        <div className={styles.Card}>
            <div className={styles.Heading}>
                <h3>Grocery Bud</h3>
            </div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={input}
                    onChange={inputChangeHandler}
                    placeholder="e.g. eggs"
                />
                <button disabled={input.length === 0}>
                    {isEditing ? "Edit" : "Add"}
                </button>
            </form>
            <ul className={styles.groceryList}>
                {groceries.map((grocery, index) => (
                    <Grocery
                        key={grocery.id}
                        id={grocery.id}
                        item={grocery.item}
                        index={index + 1}
                        onDelete={DeleteItemHandler}
                        onEdit={editHandler}
                    />
                ))}
            </ul>
            <div className={styles.Clear}>
                <button onClick={clearHandler}>Clear All</button>
            </div>
        </div>
    );
};

export default GroceryBud;
