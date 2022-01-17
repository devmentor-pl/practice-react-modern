import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [inputValue, setValue] = useState('');
    const [counter, setCounter] = useState(0);
    const [wordsLength, setWordsLength] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    };

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setCounter((value) => value + 1);
        }, 1000);
        return () => stopTimer();
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        if (inputValue === word) {
            setWordsLength(wordsLength + word.length);
            setValue('');
            regenerateWord();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);

    return (
        <div>
            <h1>Your word is: {word}</h1>
            <input value={inputValue} onChange={onChange} onFocus={startTimer} onBlur={stopTimer} />
            <span>
                You wrote: {wordsLength} letters in {counter} sec
            </span>
        </div>
    );
}

export default SpeedTest;
