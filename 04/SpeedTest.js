import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = function () {
    const [word, regenerateWord] = useRandomItem(['apple', 'banana', 'tomato', 'orange']);
    const [inputValue, setInputValue] = useState('');
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null);
    const [letters, setLetters] = useState(0);

    useEffect(() => {
        regenerateWord();
    }, []);

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTimer((prevState) => prevState + 1);
        }, 1000);
    };

    const compareWords = () => {
        console.log('compare', inputValue, word);
        if (inputValue === word) {
            setInputValue('');
            regenerateWord();
            setLetters((prevState) => prevState + word.length);
            console.log('correct');
        }
    };

    useEffect(() => {
        compareWords();
    }, [inputValue]);

    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    };

    return (
        <div>
            <h1>{word}</h1>
            <input onBlur={stopTimer} onFocus={startTimer} value={inputValue} onChange={onChange} />
            <p>{timer}</p>
            <p>Letters per second: {(letters / timer).toFixed(2)}</p>
        </div>
    );
};

export default SpeedTest;
