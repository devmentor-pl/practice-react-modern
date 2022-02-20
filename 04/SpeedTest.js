import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['comfortable', 'available', 'sustainable', 'obvious', 'easy']);
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [lettersCounter, setlettersCounter] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    };

    function startTimer() {
        intervalRef.current = setInterval(() => {
            setCounter((value) => value + 1);
        }, 1000);
        return () => stopTimer();
    }

    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        if (inputValue === word) {
            regenerateWord();
            setInputValue('');
            setlettersCounter(lettersCounter + word.length);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);

    return (
        <div>
            <h1>Your word is: {word}</h1>
            <input value={inputValue} onChange={onChange} onFocus={startTimer} onBlur={stopTimer} />
            <span>
                You wrote: {lettersCounter} letters in {counter} sec
            </span>
        </div>
    );
}

export default SpeedTest;
