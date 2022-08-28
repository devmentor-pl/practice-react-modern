import React, { useEffect,useState,useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [inputValue, setInputValue] = useState('');
    const [counter, setCounter] = useState(0);
    const [charactersLength, setCharactersLength] = useState(0);
    const inputRef = useRef(null);
    const intervalRef = useRef(null);

    const stopInterval = () => {
        clearInterval( intervalRef.current );
    }

    useEffect(() => {
        regenerateWord();
        return () => stopInterval();
    },[]);

    const startGame = () => {
        intervalRef.current = setInterval(() => {
            setCounter(value => value + 1);
        }, 1000);
    };

    useEffect(() => {
        if (inputValue === word) {
            setCharactersLength(value => value + inputValue.length);
            setInputValue('')
        };
    },[inputValue])

    return (
        <div>
            <h1>{word}</h1>
            <div>time:{ counter }</div>
            <div>characters:{ charactersLength }</div>
            <input ref={inputRef} onFocus={()=>startGame()} onBlur={()=>stopInterval()} onChange={(e)=>{setInputValue(e.target.value)}} name='randomWord' value={inputValue} />
        </div>
    );
};

export default SpeedTest;
