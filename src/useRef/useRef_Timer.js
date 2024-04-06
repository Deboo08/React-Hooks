import React, { useState, useRef } from "react";

export default function () {
    const [time, setTime] = useState(0);
    const intervalRef = useRef();

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }

    const stopTimer = () => {
        console.log("warning: timer stopped")
        clearTimeout(intervalRef.current)
    }

    const resetTimer = () => {
        setTime(0);
        clearTimeout(intervalRef.current);
    }

    return (
        <div>
            <p>{time} seconds</p>
            <button onClick={startTimer}>Start</button>
            <br/>
            <br/>
            <button onClick={stopTimer}>Stop</button>
            <br/>
            <br/>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}