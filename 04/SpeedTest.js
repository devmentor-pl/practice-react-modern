import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [time, setTime] = useState(0);
    const [text, setText] = useState('');
    const [numOfChars, setNumOfChars] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        regenerateWord();
    }, []);
    useEffect(() => {
        word.localCompare(text) ? setNumOfChars(numOfChars + 1) : '';
    }, [text]);
    const incrementTime = () => {
        setTime(time => time + 1);
    };
    const startTimer = () => {
        timerRef.current = setInterval(incrementTime, 1000);
    };
    const stopTimer = () => {
        clearInterval(timerRef.current);
    };
    const handleChange = e => {
        setText(e.target.value);
    };

    return (
        <div>
            <h1>{word}</h1>
            <input value={text} onFocus={startTimer} onBlur={stopTimer} onChange={handleChange} />
        </div>
    );
};

export default SpeedTest;
