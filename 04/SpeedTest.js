import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [counter, setCounter] = useState(0);
    const [inputValue, setValue] = useState('');
    const [matches, setMatches] = useState(0);
    const inputRef = useRef(null);
    const finishRef = useRef(null);
    const [finish, setFinish] = useState(finishRef.current);
    const resetTimer = () => {
        clearInterval(inputRef.current);
        setCounter(counter - counter);
        setMatches(0);
    };
    useEffect(() => {
        regenerateWord();
    }, []);
    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(word, inputValue);
        if (word === inputValue) {
            setMatches((match) => match + inputValue.length);
            setValue('');
            regenerateWord();
            // eslint-disable-next-line no-console
            console.log(matches);
        }
        if (matches > 30) {
            setFinish(`Result: ${counter}`);
            resetTimer();
        }
    }, [inputValue]);

    const startTimer = () => {
        inputRef.current = setInterval(() => {
            setCounter((value) => value + 1);
        }, 1000);
    };
    const handleReset = () => {
        setValue('');
        setCounter(0);
        setFinish('');
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
            <p>{finish}</p>
            <button onClick={handleReset} type="button">
                Reset
            </button>
        </div>
    );
}

export default SpeedTest;
