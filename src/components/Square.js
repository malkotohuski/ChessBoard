// Square.js
import React from "react";
import Piece from "./Piece";

const Square = ({ color, pieceType }) => {
    const style = {
        backgroundColor: color,
        width: "50px",
        height: "50px",
    };

    return (
        <div className="square" style={style}>
            {pieceType && <Piece type={pieceType} />}
        </div>
    );
};

export default Square;
