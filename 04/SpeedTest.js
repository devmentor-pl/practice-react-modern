import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hooks';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [text, setText] = useState('');
    const [focused, setFocused] = useState(false);
    const [time, setTime] = useState(0);
    const [textLength, setTextLength] = useState(0);
    const intervalRef = useRef(null);

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if (focused === true) {
            const startTime = new Date();
            intervalRef.current = setInterval(() => {
                const elapsedTime = Date.now() - startTime;
                setTime((elapsedTime / 1000).toFixed(2));
            }, 100);
        }

        return () => stopInterval();
    }, [focused]);

    useEffect(() => {
        if (text === word) {
            setTextLength((value) => value + text.length);
            setText('');
            regenerateWord();
        }
    }, [text]);

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            <p>Time: {time}s</p>
            <p>Correct letters: {textLength}</p>
        </div>
    );
}

export default SpeedTest;
