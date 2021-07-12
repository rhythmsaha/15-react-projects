import React from "react";
import styles from "./css/Grocery.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Grocery = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    const editHandler = () => {
        props.onEdit(props.id);
    };

    return (
        <li className={styles.GroceryItem}>
            <div>
                <span>
                    <span className={styles.index}>{props.index}.</span>
                    {props.item}
                </span>
                <span className={styles.actions}>
                    <button onClick={editHandler}>
                        <FaEdit className={styles.FaEdit} />
                    </button>
                    <button onClick={deleteHandler}>
                        <FaTrash className={styles.FaTrash} />
                    </button>
                </span>
            </div>
        </li>
    );
};

export default Grocery;
