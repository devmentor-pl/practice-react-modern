import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [wordsLength, setWordsLength] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [endTime, setEndTime] = useState(5);

    const intervalRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        regenerateWord();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (endTime === counter) {
            clearInterval(intervalRef.current);
            inputRef.current.blur();
            setInputValue('');
            console.log('przegrałeś');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter]);

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setCounter((value) => value + 1);
        }, 1000);
    };

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setInputValue(value);

        if (value.trim() !== word) return;

        stopInterval();
        setWordsLength((prevState) => prevState + value.length);
        regenerateWord();
        e.target.blur();
        setInputValue('');
    };

    return (
        <div>
            <h1>{word}</h1>
            <input
                ref={inputRef}
                onFocus={startTimer}
                onBlur={stopInterval}
                onChange={handleChange}
                value={inputValue}
            />
            <p>timer: {counter}</p>
            <p>letters typed: {wordsLength}</p>
        </div>
    );
}

export default SpeedTest;
