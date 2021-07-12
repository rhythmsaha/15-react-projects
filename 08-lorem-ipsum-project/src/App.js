import React, { useState, useRef } from "react";
import text from "./data";

const App = () => {
    const [paragraphs, setParagraphs] = useState([]);
    const amountRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const counter = +amountRef.current.value;

        if (counter < 0) {
            setParagraphs(text);
            return;
        }

        if (counter >= 10) {
            setParagraphs(text);
            return;
        }

        const newData = text.slice(0, counter);
        setParagraphs(newData);
    };

    return (
        <div className="container">
            <div className="title">
                <h3>Tired of Boaring Lorem Ipsum ?</h3>
            </div>
            <form className="form" onSubmit={submitHandler}>
                <label htmlFor="amount">Paragraphs</label>
                <input
                    type="number"
                    id="amount"
                    min="0"
                    max="10"
                    ref={amountRef}
                />
                <button>Generate</button>
            </form>
            <section className="paragraphs">
                {paragraphs.map((para, index) => {
                    return (
                        <p key={index} className="para">
                            {para}
                        </p>
                    );
                })}
            </section>
        </div>
    );
};

export default App;
