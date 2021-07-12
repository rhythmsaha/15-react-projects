import React, { useState } from "react";
import Card from "./Card";
import classes from "./Birthday.module.css";
import Button from "./Button";
import Person from "./Person";

const INITIAL_PERSONS = [
    {
        name: "Ben Dover",
        photo: "./images/img1.jpg",
        age: "20 Years",
    },
    {
        name: "Aida Bugg",
        photo: "./images/img2.jpg",
        age: "21 Years",
    },
    {
        name: "Allie Grater",
        photo: "./images/img3.jpg",
        age: "25 Years",
    },
    {
        name: "Lee A. Sun",
        photo: "./images/img4.jpg",
        age: "20 Years",
    },
    {
        name: "Augusta Wind",
        photo: "./images/img5.jpg",
        age: "23 Years",
    },
];

const Birthday = () => {
    const [persons, setPersons] = useState(INITIAL_PERSONS);

    const totalBirthday = persons.length;

    const buttonClickHandler = () => {
        setPersons([]);
    };

    return (
        <Card className={classes.BirthdayCard}>
            <div className={classes.CounterText}>
                {totalBirthday} Birthdays Today
            </div>
            <div className={classes.personContainer}>
                {persons.map((person) => (
                    <Person
                        name={person.name}
                        photo={person.photo}
                        age={person.age}
                    />
                ))}
            </div>
            <Button onClick={buttonClickHandler}>Clear All</Button>
        </Card>
    );
};

export default Birthday;
