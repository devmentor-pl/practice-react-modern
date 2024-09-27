import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [time, setTime] = useState(0);
    const [text, setText] = useState('');
    const [sumValueLength, setSumValueLength] = useState(0);
    const refInput = useRef(null);

    useEffect(() => {
        if (text === word) {
            setSumValueLength((prevLength) => prevLength + text.length);
            setText('');
            regenerateWord();
        }
    }, [text]);

    const startTime = () => {
        refInput.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
    };

    const stopTime = () => {
        clearInterval(refInput.current);
        setTime(0);
        setSumValueLength(0);
    };

    useEffect(() => {
        regenerateWord();
        return () => stopTime();
    }, []);

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => startTime()}
                onBlur={() => stopTime()}
                name="text"
            />
            <p>Time: {time}</p>
            <p>All Letters Typed: {sumValueLength}</p>
            <p>Letters/Time: {time > 0 ? (sumValueLength / time).toFixed(1) : 0}</p>
        </div>
    );
}

export default SpeedTest;
