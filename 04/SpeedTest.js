import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript', 'React']);
    const [inputValue, setValue] = useState('');
    const [counter, setCounter] = useState(0);
    const [characterCount, setCharacterCount] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if (inputValue === word) {
            setCharacterCount((value) => value + inputValue.length);
            setValue('');
            regenerateWord();
        }
    }, [inputValue]);

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    };

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setCounter((seconds) => seconds + 1);
        }, 1000);
    };

    const handleStop = () => {
        stopTimer();
    };

    return (
        <div>
            <h1>{word}</h1>
            <input
                onFocus={() => startTimer()}
                onBlur={() => stopTimer()}
                onChange={(e) => setValue(e.target.value)}
                value={inputValue}
            />
            <button type="button" onClick={handleStop}>
                stop
            </button>
            <p>
                Number of matched characters: {characterCount} in {counter} sec
            </p>
        </div>
    );
}

export default SpeedTest;
