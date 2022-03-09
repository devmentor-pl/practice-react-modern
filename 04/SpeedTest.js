import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, setWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [time, setTime] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [letterCounter, setLetterCounter] = useState(0);
    const intervalRef = useRef(null);
    console.log(intervalRef);

    useEffect(() => {
        setWord();
    }, []);

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setTime((value) => value + 1);
        }, 1000);
    };

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        if (word === inputValue) {
            setInputValue('');
            setLetterCounter(letterCounter + word.length);
            setWord();
        }
    }, [inputValue]);

    return (
        <div>
            <h1>Your word: {word}</h1>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => startInterval()}
                onBlur={() => stopInterval()}
            />
            <p>
                You wrote {letterCounter} characters in {time} seconds!
            </p>
        </div>
    );
}

export default SpeedTest;
