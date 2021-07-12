import React from "react";
import classes from "./Loading.module.css";

const ToursText = (props) => {
    return (
        <div className={classes.loading}>
            <h1>{props.children}</h1>
        </div>
    );
};

export default ToursText;
