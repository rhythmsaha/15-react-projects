import React, { useState } from "react";
import classes from "./Question.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = (props) => {
    const [showAns, setShowAns] = useState(false);

    const expand = () => {
        setShowAns((p) => !p);
    };

    return (
        <div className={classes.Card}>
            <div className={classes.QuestionHeader}>
                <span className={classes.Question}>{props.title}</span>
                <span className={classes.toggleBtn}>
                    <button onClick={expand}>
                        {showAns ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </span>
            </div>
            {showAns && <div className={classes.Answer}>{props.info}</div>}
        </div>
    );
};

export default Question;
