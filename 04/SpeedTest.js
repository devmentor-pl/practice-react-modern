import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest()  {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [value, setValue] = useState('')
    const [time, setTime] = useState(0)
    const [letterCounter, setCounter] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if(word === value) {
            setValue('')
            setCounter(letterCounter + word.length)
            regenerateWord();
        }

    })


    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setTime((sec) => sec + 1)
        }, 1000)
    }

    const stopInterval = () => {
        clearInterval(intervalRef.current)
    }

    return (
        <div>
            <h1>{word}</h1>
            <input 
                value={value}
                onChange={ e => setValue(e.target.value)}
                onFocus={() => startInterval()}
                onBlur={() => stopInterval()}
            />
            <p>Czas: {time} </p>
            <p>Łączna ilość liter: {letterCounter} </p>
        </div>
    );
};

export default SpeedTest;
