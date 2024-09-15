import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem([
        'devmentor.pl',
        'abc',
        'JavaScript',
        'ok',
        'i',
        'pull',
        'up',
    ]);
    const [correctWordsCount, setCorrectWordsCount] = useState(0);

    const [intervalId, setIntervalId] = useState(null);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);

    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef(null);

    const capturing = () => {
        setInputValue(inputRef.current.value);
    };

    useEffect(() => {
        regenerateWord();
    }, []);

    const appRunning = () => {
        const id = setInterval(() => {
            setMilliseconds((prevMilliseconds) => (prevMilliseconds + 10) % 100);
            setSeconds((prevTime) => prevTime + 1);
        }, 100);
        setIntervalId(id);
    };

    const plainSeconds = Math.floor(seconds / 10);

    useEffect(() => {
        if (inputRef.current.value === word) {
            regenerateWord();
            setCorrectWordsCount((count) => count + 1);
            setInputValue('');
        }
        if (correctWordsCount === 3) {
            clearInterval(intervalId);
        }
    });

    const restartTheGame = () => {
        setCorrectWordsCount(0);
        setSeconds(0);
        setInputValue('');
        setMilliseconds(0);
    };

    return (
        <div>
            <h1>{word}</h1>
            <input onFocus={appRunning} value={inputValue} onChange={capturing} ref={inputRef} />
            <p>
                Czas: {plainSeconds}:{milliseconds}
            </p>

            <button onClick={restartTheGame} type="button">
                once again!
            </button>
        </div>
    );
};

export default SpeedTest;
