import React, { useRef, useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const App = () => {
    const [colorList, setColorList] = useState([]);
    const [error, setError] = useState(null);
    const inputColorRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const inputVal = inputColorRef.current.value;
        try {
            const fetchedColor = new Values(inputVal).all(5);
            setColorList(fetchedColor);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h3>Color Generator</h3>
                <form onSubmit={submitHandler}>
                    <input
                        className={error ? "errorInput" : undefined}
                        type="text"
                        ref={inputColorRef}
                        onChange={() => {
                            setError((old) => false);
                            setColorList([]);
                        }}
                    />
                    <button>Generate</button>
                </form>
            </div>

            <section className="colorssection">
                {!error &&
                    colorList.map((color, index) => {
                        return <SingleColor key={index} color={color} />;
                    })}
                {error && <p>Please Enter a valid color</p>}
            </section>
        </div>
    );
};

export default App;
