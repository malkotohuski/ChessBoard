import React from "react";

const Square = ({ color }) => {
    const style = {
        backgroundColor: color,
        width: "50px",
        height: "50px",
    };

    return <div className="square" style={style}></div>;
};

export default Square;
