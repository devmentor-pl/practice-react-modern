import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);

    const [text, setText] = useState('');
    const [time, setTime] = useState(0);
    const [totalChars, setTotalChars] = useState(0);

    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if (text === word) {
            setTotalChars((prev) => prev + word.length);
            setText('');
            regenerateWord();
        }
    }, [text]);

    const handleFocus = () => {
        intervalRef.current = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
    };
    const handleBlur = () => {
        clearInterval(intervalRef.current);
    };
    return (
        <div>
            <h1>Przepisz słowo:</h1>
            <h2>{word}</h2>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <p>Czas: {time}s</p>
            <p>Łączna liczba znaków: {totalChars}</p>
        </div>
    );
}

export default SpeedTest;
