import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [text, setText] = useState('')
    const [time, setTime] = useState(0)
    const [length, setLength] = useState(0)

    const intervalId = useRef(null)

    useEffect(() => {
        regenerateWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(() => {
        if(text === word) {
            regenerateWord()
            setLength((curr) => curr + text.length)
            setText('')
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    function startInterval() {
        intervalId.current = setInterval(() => {
            setTime((currentTime) => currentTime + 1)
        }, 1000)
    }

    function stopInterval() {
        clearInterval(intervalId.current)

    }

    return (
        <div>
            <h1>{word}</h1>
            <h2>{time}</h2>
            <h3>Ilość znaków na sec.: {time > 0 ? (length / time).toFixed(1) : 0}</h3>
            <input value={text} onBlur={stopInterval} onFocus={startInterval} onChange={e => setText(e.target.value)}/>
        </div>
    );
};

export default SpeedTest;
