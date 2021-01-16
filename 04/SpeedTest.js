import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [time, setTime] = useState(0);
    const [text, setText] = useState('');
    const [numOfChars, setNumOfChars] = useState(0);
    const [score, setScore] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        regenerateWord();
    }, []);
    const incrementTime = () => {
        setTime(time => time + 1);
    };
    const startTimer = () => {
        timerRef.current = setInterval(incrementTime, 1000);
    };
    const stopTimer = () => {
        clearInterval(timerRef.current);
    };

    useEffect(() => {
        if (word != null) {
            if (word === text) {
                setNumOfChars(numOfChars + text.length);
                setText('');
                setScore(Math.round(score + 1 + numOfChars / time));
                setTotalTime(totalTime + time);
                setTime(0);
            }
        }
    }, [text]);

    useEffect(() => {
        regenerateWord();
    }, [numOfChars]);

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={text}
                onFocus={startTimer}
                onBlur={stopTimer}
                onChange={e => setText(e.target.value)}
            />
            <h5>score: {score}</h5>
            <h5>time: {time}</h5>
            <h5>Total Time: {totalTime}</h5>
        </div>
    );
};

export default SpeedTest;
