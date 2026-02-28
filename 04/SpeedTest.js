/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const inputWord = useRef(null);
    const idInterval = useRef(null);

    const start = () => {
        idInterval.current = setInterval(() => {
            setTimer((value) => value + 1);
        }, 1000);
    };

    const stop = () => {
        if (idInterval.current) {
            clearInterval(idInterval.current);
        }
    }

    const handleChange = () => {
        console.log(inputWord.current.value)
        if (inputWord.current.value === word) {
            setCounter((value) => value + word.length);
            regenerateWord();
            inputWord.current.value = '';
        }
    }

    useEffect(() => {
        regenerateWord();
    }, []);

    return (
        <div>
            <h1>{word}</h1>
            <div>{timer} s</div>
            <div>{counter}</div>
            <input name="word" ref={inputWord} onBlur={stop} onFocus={start} onChange={handleChange} />
        </div>
    );
}

export default SpeedTest;
