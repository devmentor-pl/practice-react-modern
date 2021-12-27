import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = function () {
    const [word, regenerateWord] = useRandomItem(['abc']);
    const [inputValue, setInputValue] = useState('');
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
    }, []);

    const compareWords = () => {
        console.log('compare', inputValue, word);
        if (inputValue === word) {
            setInputValue('');
            regenerateWord();
            console.log('correct');
        }
    };

    const onChange = (e) => {
        setInputValue(e.target.value);
        compareWords();
    };

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTimer(timer + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    };

    return (
        <div>
            <h1>{word}</h1>
            <input onBlur={stopTimer} onFocus={startTimer} value={inputValue} onChange={onChange} />
            <p>{timer}</p>
        </div>
    );
};

export default SpeedTest;
