import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hooks';

function SpeedTest() {
    const [word, randomNewWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [text, setText] = useState('');
    const [focused, setFocused] = useState(false);
    const [counter, setCounter] = useState(5);
    const [textLength, setTextLength] = useState(0);
    const [finish, setFinish] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const intervalRef = useRef(null);

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        randomNewWord();
    }, []);

    const startGame = () => {
        intervalRef.current = setInterval(() => {
            setCounter((currCounter) => {
                const nextCounter = currCounter - 1;

                if (nextCounter === 0) stopInterval();

                return nextCounter;
            });
        }, 1000);
    };

    const handleCorrectAnswer = () => {
        setTextLength((value) => value + text.length);
        setText('');
        randomNewWord();
    };

    const handleEndOfTime = () => {
        setFinish(true);
        setText('');
        setDisabled(true);
    };

    const handleResetGame = () => {
        setFinish(false);
        setDisabled(false);
        setCounter(5);
        setTextLength(0);
        setFocused(false);
        randomNewWord();
    };

    useEffect(() => {
        if (focused === true && !finish) startGame();

        return () => stopInterval();
    }, [focused, finish]);

    useEffect(() => {
        if (text === word && !finish) handleCorrectAnswer();
    }, [text, finish]);

    useEffect(() => {
        if (counter === 0) handleEndOfTime();
    }, [counter]);

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={text}
                disabled={disabled}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            {finish && <h2>Time&apos;s up!</h2>}
            <p>Time: {counter}s</p>
            <p>Correct letters: {textLength}</p>
            <button
                type="button"
                onClick={() => handleResetGame()}
            >
                Restart
            </button>
        </div>
    );
}

export default SpeedTest;
