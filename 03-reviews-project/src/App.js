import React, { useState } from "react";
import "./App.css";
import Persons from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = Persons[index];

    const checkNumber = (number) => {
        if (number > Persons.length - 1) {
            return 0;
        }
        if (number < 0) {
            return Persons.length - 1;
        }
        return number;
    };
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * Persons.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return (
        <main className="main">
            <div className="title">Our Reviews</div>
            <div className="card">
                <div className="image">
                    <span className="quoteIcon">
                        <FaQuoteRight />
                    </span>
                    <img src={image} alt="" />
                </div>
                <div className="name">{name}</div>
                <div className="job">{job}</div>
                <div className="text">{text}</div>

                <div className="btns">
                    <div className="nextPrev">
                        <button className="changeBtns" onClick={prevPerson}>
                            <FaChevronLeft />
                        </button>
                        <button className="changeBtns" onClick={nextPerson}>
                            <FaChevronRight />
                        </button>
                    </div>
                    <button className="surprise" onClick={randomPerson}>
                        Surprise Me
                    </button>
                </div>
            </div>
        </main>
    );
}

export default App;
