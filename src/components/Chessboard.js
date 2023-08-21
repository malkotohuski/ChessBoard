import React from "react";
import Square from "./Square";

const Chessboard = () => {
    const boardSize = 8; // Chessboard size
    const squares = [];

    // Generate squares for the chessboard
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const isEvenSquare = (row + col) % 2 === 0;
            const squareColor = isEvenSquare ? "white" : "black";
            squares.push(<Square key={`${row}-${col}`} color={squareColor} />);
        }
    }

    return <div className="chessboard">{squares}</div>;
};

export default Chessboard;
