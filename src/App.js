import React from "react";
import ReactDOM from "react-dom";
import Chessboard from "./components/Chessboard";
import "./styles.css"; // Add the CSS file

function App() {
    return (
        <div className="App">
            <Chessboard />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
