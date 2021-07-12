import React from "react";

const SingleColor = ({ color }) => {
    const hexVal = color.hexString();
    const brightness = color.getBrightness();
    const colorClass = brightness < 50 ? "whiteText" : "blackText";

    const copyHandler = () => {
        navigator.clipboard.writeText(hexVal);
        alert("Copied Succesfully");
    };

    return (
        <div
            onClick={copyHandler}
            className={`colorBox ${colorClass}`}
            style={{ background: hexVal }}
        >
            <p>{color.weight}%</p>
            <p>{hexVal}</p>
        </div>
    );
};

export default SingleColor;
