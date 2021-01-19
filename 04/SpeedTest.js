import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const intervalRef = useRef(null);
    const timeLimitSec = 10;
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JS']);
    const [text, setText] = useState('');
    const [time, setTime] = useState(0);
    const [points, setPoints] = useState(0);
    const [length, setLength] = useState(0);
    const [inFocus, setFocusState] = useState(false);

    const stopInterval = () => clearInterval(intervalRef.current);
    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setTime(step => {
                if (step < timeLimitSec) {
                    return step + 1;
                }
                stopInterval();
                return 0;
            });
        }, 1000);
    };

    const handleSubmit = e => {
        console.log('subtmi');
        e.preventDefault();
        if (text && text === word) {
            setPoints(points + 1);
            setLength(length + word.length);
            setText('');
            regenerateWord();
        }
        return null;
    };

    const zeroClock = () => {
        setTime(0);
    };

    const handleClock = () => {
        if (inFocus === false) {
            setFocusState(true);
            zeroClock();
            startInterval();
        }
    };

    const handleInput = ({ target: { value } }) => {
        setText(value);
    };

    const handleRestart = () => {
        setPoints(0);
        setTime(0);
        setText('');
        setFocusState(false);
        regenerateWord();
    };

    useEffect(() => {
        regenerateWord();
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <form onSubmit={handleSubmit} name="form">
            <h1>{word}</h1>
            <h2>
                Time: {time} / {timeLimitSec} s.
            </h2>
            <h2>Correct words: {points}</h2>
            <p>
                {time === 0
                    ? `Your score is ${length * (60 / timeLimitSec)} chars per minute.`
                    : 'Go!'}
            </p>
            <input
                ref={intervalRef}
                value={text}
                onChange={handleInput}
                onBlur={stopInterval}
                onFocus={handleClock}
            />
            <button name="restart" type="button" onClick={handleRestart}>
                Restart
            </button>
        </form>
    );
};

export default SpeedTest;
