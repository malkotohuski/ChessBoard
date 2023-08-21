// Piece.js
import React from "react";

const Piece = ({ type }) => {
    const iconPath = `../icons/${type}.png`; // Path to the icon

    return (
        <img
            className="piece"
            src={iconPath}
            alt={type}
            width="40"
            height="40"
        />
    );
};

export default Piece;
