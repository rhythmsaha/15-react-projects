import React, { useState } from "react";
import classes from "./Tour.module.css";

const Tour = (props) => {
    const [showMore, setShowMore] = useState(false);

    const ToggleView = () => {
        setShowMore((prevstate) => !prevstate);
    };

    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    return (
        <div className={classes.Card}>
            <div className={classes.Image}>
                <img src={props.image} alt="Tour" />
            </div>
            <div className={classes.infoContainer}>
                <div className={classes.cardHeader}>
                    <span className={classes.TourName}>{props.name}</span>
                    <span className={classes.PriceTag}>${props.price}</span>
                </div>
                <div className={classes.Details}>
                    {showMore
                        ? props.info
                        : `${props.info.substring(0, 200)}...`}
                    <button className={classes.ToggleView} onClick={ToggleView}>
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>
            <div className={classes.CardFooter}>
                <button className={classes.DeleteBtn} onClick={deleteHandler}>
                    Not Interested
                </button>
            </div>
        </div>
    );
};

export default Tour;
