import React, { useState } from "react";
import boxes from "./Components/Boxes"
import "./boxeschallenge.css"

export default function BoxesChallenge(props) {
    const [squares, setSquares] = React.useState(boxes)
    
    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"
    
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }
    
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}