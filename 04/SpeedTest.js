import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

import DisplayResults from './DisplayResults'

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [enteredText, setEnteredText] = useState('');
    const [seconds, setSeconds] = useState(0);
    const [results, setResults] = useState([])

    const clockRef = useRef(null);
    const inputRef = useRef(null);

    const startClock = () => {
        clockRef.current = setInterval(() => {
            setSeconds(value => value + 1);
        }, 1000);
    }

    const stopClock = () => {
        clearInterval( clockRef.current );
    }

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if(enteredText === word) {
            stopClock();
            clockRef.current = null
            setResults([...results, {word, seconds}])
            regenerateWord();
            setSeconds(0);
            setEnteredText('')
            inputRef.current.blur();
        }
    }, [enteredText])

    return (
        <div>
            <h1>{word}</h1>
            <input  ref={ inputRef }
                value={ enteredText }
                onChange={ e => setEnteredText(e.target.value) }
                onFocus={ startClock }
                onBlur={ stopClock } />
            <DisplayResults results={ results } />
        </div>
    );
};

export default SpeedTest;
