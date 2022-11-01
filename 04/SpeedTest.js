import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);

    const [text, setText] = useState('');
    const [timer, setTimer] = useState(0);
    const [counter, setCounter] = useState(0);
    const [speed, setSpeed] = useState();
    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
    }, []);

    const runTask = () => {
        setTimer(0);
        setCounter(0);
        setSpeed(0);
        intervalRef.current = setInterval(() => {
            setTimer((currVal) => currVal + 1);
        }, 1000);
    };

    const stopTask = () => {
        clearInterval(intervalRef.current);
        setSpeed(() => ((counter * 60) / timer).toFixed());
    };

    useEffect(() => {
        if (word === text) {
            regenerateWord();
            setCounter((count) => count + word.length);
            setText('');
        }
    }, [text]);

    return (
        <div>
            <h1>{word}</h1>
            <input
                onChange={(e) => setText(e.target.value)}
                onFocus={(e) => runTask(e)}
                onBlur={(e) => stopTask(e)}
                value={text}
            />
            <p>{`Prędkość pisania na klawiaturze: ${speed || '___'} znaków/min`}</p>
        </div>
    );
}

export default SpeedTest;
