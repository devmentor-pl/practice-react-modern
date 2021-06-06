import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [inputValue, setValue] = useState('');
    const [counter, setCounter] = useState(0);
    const inputEl = useRef(null);

    // eslint-disable-next-line consistent-return
    const checkMatching = () => {
        if (word !== null) {
            if (word.indexOf(inputValue) === 0) {
                return <span style={{ color: 'green', fontSize: '20px' }}>{inputValue}</span>;
            }
            return <span style={{ color: 'red', fontSize: '20px' }}>{inputValue}</span>;
        }
    };

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if (inputValue === word) {
            clearInterval(inputEl.current);
        }
    }, [inputValue]);

    const startTimer = () => {
        inputEl.current = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(inputEl.current);
        setValue('');
        regenerateWord();
    };

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={inputValue}
                onChange={e => setValue(e.target.value)}
                onFocus={startTimer}
                onBlur={stopTimer}
                ref={inputEl}
            />
            <p>{counter} sec</p>
            <p>Your matching: {inputValue ? checkMatching() : 'Start typing'}</p>
        </div>
    );
};

export default SpeedTest;
