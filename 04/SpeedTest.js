import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = function () {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState(null);
    const [marks, setMarks] = useState(0);
    const [words, setWords] = useState(0);
    const [result, setResult] = useState(0);
    const intervalRef = useRef(null);

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        if (text === word) {
            setText('');
            if (words === 10) {
                setResult(marks / counter);
            }
            regenerateWord();
        }
    });

    return (
        <div>
            <h1>{word}</h1>
            <input
                onFocus={() => {
                    intervalRef.current = setInterval(() => {
                        setCounter((value) => value + 1);
                    }, 1000);
                }}
                onBlur={() => stopInterval()}
                onChange={(e) => {
                    setText(e.target.value);
                    if (e.target.value === word) {
                        setMarks((value) => value + word.length);
                        e.target.value = '';
                        setWords((value) => value + 1);
                    }
                }}
            />
            {counter}
            <p>Twój wynik to: {result} liter na sekundę</p>
        </div>
    );
};

export default SpeedTest;
