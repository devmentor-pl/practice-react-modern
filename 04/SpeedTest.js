import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [value, setValue] = useState('');
    const [time, setTime] = useState(0);
    const [rounds, setRounds] = useState(1);
    const [enteredWords, setWords] = useState(0);
    const intervalRef = useRef(null);

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        setTime(0);
        setWords(0);
        setRounds((round) => round + 1);
    };

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTime((second) => second + 1);
        }, 1000);
    };

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if (value === word) {
            setValue('');
            setWords((currWord) => currWord + 1);
            regenerateWord();
        }
    }, [value]);

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                ref={intervalRef}
                onFocus={() => startTimer()}
                onBlur={() => stopTimer()}
            />
            <p>Runda: {rounds}</p>
            <p>Czas: {time}s</p>
            <p>Ilość słów: {enteredWords}</p>
        </div>
    );
}

export default SpeedTest;
