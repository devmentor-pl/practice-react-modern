import React, { useState, useEffect, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem([
        'devmentor.pl',
        'abc',
        'JavaScript',
        'abcdefgh',
        'programista',
    ]);

    const [counter, setCounter] = useState(0);
    const intervalRef = useRef(null);

    const [text, setText] = useState('');

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };

    const handleChange = e => {
        const { value } = e.target;
        setText(value);
        if (word === value) {
            const result = Math.round(text.length / (counter / 60));
            console.log(`Twoja szybkość pisania wynosi: ${result} [znak/min]`);
            setCounter(0);
            regenerateWord();
            setText('');
        }
    };

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCounter(value => value + 1);
        }, 1000);
    };

    useEffect(() => {
        regenerateWord();
    }, []);

    return (
        <div>
            <h1>{word}</h1>
            <input
                name="text"
                value={text}
                onFocus={() => startInterval()}
                onBlur={() => stopInterval()}
                onChange={handleChange}
            />
            <h1>{counter}</h1>
        </div>
    );
};

export default SpeedTest;
