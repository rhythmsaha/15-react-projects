import React, { useEffect, useState } from "react";
import ToursText from "./ToursText";
import Tour from "./Tour";
import classes from "./Tours.module.css";

const Tours = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTours = async () => {
        setLoading(true);
        const response = await fetch(
            "https://course-api.com/react-tours-project"
        );
        if (response.ok) {
            setLoading(false);
            const data = await response.json();
            return data;
        } else {
            setLoading(false);
            throw new Error("Something went Wrong");
        }
    };

    useEffect(() => {
        fetchTours().then((data) => setTours(data));
    }, []);

    const deleteHandler = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    return (
        <div>
            <div className={classes.tourHeader}>
                <h1>Our Tours</h1>
            </div>
            {loading && <ToursText>Loading...</ToursText>}
            {!loading &&
                tours.length > 0 &&
                tours.map((tour) => (
                    <Tour
                        onDelete={deleteHandler}
                        id={tour.id}
                        name={tour.name}
                        info={tour.info}
                        image={tour.image}
                        price={tour.price}
                        key={tour.id}
                    />
                ))}
        </div>
    );
};

export default Tours;
