import React, { useEffect, useRef, useState }from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [counter, setCounter] = useState(0);


    const inputRef = useRef(null)

   

    useEffect(() => {
        regenerateWord();
        return () => clearInterval(inputRef.current)
    }, []);



    const startTime = () => {
        inputRef.current = setInterval(() => {
            setCounter(value => value + 1);
            // regenerateWord()
        }, 1000);
    };
    const stopTime = () => {
        clearInterval(inputRef.current);
    }

    return (
        <div>
            <h1>{word}</h1>
            <input 
                ref = {inputRef}
                onFocus={() => startTime()}
                onBlur={() => stopTime()}
            
            />
            <p>Time: {counter} </p>
            <p>Number of correct letters:</p>
        </div>
    );
};

export default SpeedTest;
