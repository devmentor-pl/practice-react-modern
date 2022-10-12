import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [counter, setCounter] = useState(0);
    const [inputValue, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);
    const finishRef = useRef(null);

    const resetTimer = () => {
        clearInterval(inputRef.current);
        setCounter(counter - counter);
    };
    useEffect(() => {
        regenerateWord();
    }, []);
    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(word, inputValue);
        if (word === inputValue) {
            // eslint-disable-next-line no-alert
            clearInterval(inputRef.current);
            setResult(counter);
            setCounter(0);
            finishRef.current.textContent = 'Finished';
        }
    }, [inputValue]);

    const startTimer = () => {
        inputRef.current = setInterval(() => {
            setCounter((value) => value + 1);
        }, 1000);
    };
    const handleReset = () => {
        setResult(0);
        setValue('');
        setCounter(0);
        finishRef.current.textContent = `Time: ${counter}`;
    };
    return (
        <div>
            <h1>{word}</h1>
            <p ref={finishRef}>Time: {counter}</p>
            <input
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
                onFocus={startTimer}
                onBlur={resetTimer}
            />
            <p>Result: {result}</p>
            <button onClick={handleReset} type="button">
                Reset
            </button>
        </div>
    );
}

export default SpeedTest;
