import React from "react";
import questions from "../data";
import Question from "./Question";
import classes from "./Questions.module.css";

const Questions = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.CardHeader}>
                Questions And Answers About Login
            </div>
            <div className={classes.QuestionList}>
                {questions.map((question) => (
                    <Question key={question.id} {...question} />
                ))}
            </div>
        </div>
    );
};

export default Questions;
