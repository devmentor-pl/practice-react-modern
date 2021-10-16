import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);

    const [inputValue, setInputValue] = useState('');
    const [timer, setTimer] = useState(0);

    const intervalRef = useRef(null);

    const handleChange = e => {
        setInputValue(e.target.value);
    };

    const countCorrectChars = (wordToCheck, userInput) => {
        const wordArr = wordToCheck.split('');
        const userInputArr = userInput.replace(' ', '').split('');
        const result = userInputArr.filter((s, i) => s === wordArr[i]);
        return result;
    };

    const checkIfCorrect = (wordToCheck, userInput) => {
        const result = countCorrectChars(wordToCheck, userInput);
        if (result.length === word.length) {
            return true;
        }
        return false;
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
        if (checkIfCorrect(word, inputValue)) {
            regenerateWord();
            setTimer(0);
            setInputValue('');
        }
    };

    const handleStart = () => {
        intervalRef.current = setInterval(() => {
            setTimer(prevtimer => prevtimer + 1);
        }, 1000);
        return () => handleStop();
    };

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if (inputValue !== '' && checkIfCorrect(word, inputValue)) {
            clearInterval(intervalRef.current);
            regenerateWord();
            setTimer(0);
            setInputValue('');
            handleStart();
        }
    }, [inputValue]);

    return (
        <div>
            <h1>{word}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onFocus={handleStart}
                onBlur={handleStop}
            />
            <p>Time: {timer}</p>
        </div>
    );
};

export default SpeedTest;
