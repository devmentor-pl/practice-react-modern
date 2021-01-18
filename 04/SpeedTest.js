import {v4 as uuid} from 'uuid';

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
            setSeconds(value => Math.round((value + 0.1) * 100) / 100);
        }, 100);
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
            setResults([...results, {word, seconds, id: uuid()}])
            regenerateWord();
            setSeconds(0);
            setEnteredText('')
            inputRef.current.blur();
        }
    }, [enteredText])

    return (
        <div>
            <h1>{word}</h1>
            <h4>{ `czas wprowadzania wyrazu: ${ seconds }` }</h4>
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
