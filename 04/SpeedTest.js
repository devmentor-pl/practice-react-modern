/* eslint-disable react/function-component-definition */
import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [time, setTime] = useState(0);
    const [input, setInput] = useState('');
    const [counter, setCounter] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
    }, []);

    const runInterval = () => {
        intervalRef.current = setInterval( () => {
            setTime((val) => val + 1);
        }, 1000);
    }

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };

    useEffect( () => {
        if (word === input) {
            setInput('');
            setCounter(counter + word.length);
            regenerateWord();
        }
    }, [input]);

    return (
        <div>
            <h1>Drawn word: {word}</h1>
            <input 
                value={input}
                onChange={ (e) => setInput(e.target.value)}
                onFocus={ () => runInterval() }
                onBlur={ () => stopInterval() }
            />
            <p>Well done! You managed to write {counter} characters in {time} seconds!</p>
        </div>
    );
};

export default SpeedTest;
