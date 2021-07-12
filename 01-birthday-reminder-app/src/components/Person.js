import React from "react";
import classes from "./Person.module.css";

const Person = (props) => {
    return (
        <div className={classes.Person}>
            <span className={classes.Picture}>
                <img src={props.photo} alt="" />
            </span>
            <div className={classes.Details}>
                <div className={classes.Name}>{props.name}</div>
                <div className={classes.Age}>{props.age}</div>
            </div>
        </div>
    );
};

export default Person;
