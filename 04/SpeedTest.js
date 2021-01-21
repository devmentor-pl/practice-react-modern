import React, { useState, useEffect, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [text, setText] = useState('');
    const [time, setTime] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const [correctInputLength, setCorrectInputLength] = useState(0);

    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if (isFocused) {
            intervalRef.current = setInterval(() => {
                setTime(currTime => currTime + 0.1);
            }, 100);
        } else if (!isFocused) {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isFocused]);

    useEffect(() => {
        if (text === word) {
            setTime(0);
            setText('');
            setCorrectInputLength(word.length);
            regenerateWord();
        }
    }, [text]);

    return (
        <div>
            <h1>Wpisz słowo: {word}</h1>
            <input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={e => setText(e.target.value)}
                value={text}
            />
            <p>Czas wpisywania: {time.toFixed(1)}</p>
            <p>Długość ostatniego poprawnego wyrazu: {correctInputLength}</p>
        </div>
    );
};

export default SpeedTest;
