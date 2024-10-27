import React, { useEffect, useState, useRef } from "react";
import useRandomItem from "./hook";

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem([
        "devmentor.pl",
        "abc",
        "JavaScript",
        "test",
        "Michael Scott",
        "Dwight Schrute",
    ]);

    const [text, setText] = useState(null);
    const [timer, setTimer] = useState(0);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        regenerateWord();
    }, [counter]);
    const hRef = useRef(null);
    const timeRef = useRef(null);
    const resultRef = useRef(null);
    const intervalRef = useRef(null);
    const counterRef = useRef(null);
    const inputRef = useRef(null);
    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };

    const handleFocus = () => {
        intervalRef.current = setInterval(() => {
            setTimer((value) => value + 1);
        }, 1000);
    };
    const handleChange = () => {
        setText(inputRef.current.value);
    };
    const handleStop = () => {
        resultRef.current.innerText = ` Your result: ${counter} characters`;
        timeRef.current.innerText = `Your time: ${timer} s`;
        stopInterval();
    };

    const handleClick = () => {
        setCounter(0);
        setTimer(0);
        inputRef.current.value = "";
        resultRef.current.innerText = ``;
        timeRef.current.innerText = ``;
    };
    useEffect(() => {
        counterRef.current = setCounter((currCounter) => {
            const currLen = hRef.current.innerText;
            const nextCounter = currCounter + currLen.length;
            if (word === inputRef.current.value) {
                inputRef.current.value = "";
                return nextCounter;
            }
            return counter;
        });
    }, [text]);

    return (
        <div style={{ display: "grid", placeItems: "center" }}>
            <h1 ref={hRef}>{word}</h1>
            <input
                style={{ padding: "10px" }}
                ref={inputRef}
                onFocus={handleFocus}
                onChange={handleChange}
                onBlur={stopInterval}
                placeholder="start typing"
            />
            <p
                style={{
                    border: "1px solid grey",
                    borderRadius: "20px",
                    width: "80px",
                    padding: "8px",
                    fontSize: "1.3rem",
                    textAlign: "center",
                }}
            >
                {" "}
                {timer}
            </p>
            seconds
            <p
                style={{
                    border: "1px solid grey",
                    borderRadius: "20px",
                    width: "80px",
                    padding: "8px",
                    fontSize: "1.3rem",
                    textAlign: "center",
                }}
            >
                {" "}
                {counter}
            </p>{" "}
            characters
            <button
                style={{ marginBottom: "3rem", marginTop: "2rem", width: "70px", padding: "8px" }}
                type="button"
                onClick={handleClick}
            >
                RESET
            </button>
            <button style={{ width: "70px", padding: "8px" }} type="button" onClick={handleStop}>
                STOP
            </button>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "3rem",
                    border: "1px solid black",
                    minWidth: "300px",
                    padding: "30px",
                    textAlign: "center",
                }}
            >
                <h2>RESULT</h2>
                <p ref={timeRef} />
                <p ref={resultRef} />
            </div>
        </div>
    );
}

export default SpeedTest;
