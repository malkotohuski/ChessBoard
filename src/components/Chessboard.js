import React from "react";
import Square from "./Square";

const Chessboard = () => {
    const boardSize = 8;

    const initialLayout = [
        [
            "rook",
            "knight",
            "bishop",
            "queen",
            "king",
            "bishop",
            "knight",
            "rook",
        ],
        Array(8).fill("pawn"),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill("pawn"),
        [
            "rook",
            "knight",
            "bishop",
            "queen",
            "king",
            "bishop",
            "knight",
            "rook",
        ],
    ];

    const squares = [];
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const pieceType = initialLayout[row][col];
            const isEvenSquare = (row + col) % 2 === 0;
            const squareColor = isEvenSquare ? "white" : "black";

            squares.push(
                <Square
                    key={`${row}-${col}`}
                    color={squareColor}
                    pieceType={pieceType}
                />
            );
        }
    }

    return <div className="chessboard">{squares}</div>;
};

export default Chessboard;
