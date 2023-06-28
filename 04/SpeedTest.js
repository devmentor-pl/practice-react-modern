import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

const SpeedTest = function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [text, setText] = useState('')
    const [time, setTime] = useState(0)
    const [length, setLength] = useState(0)

    const intervalId = useRef(null)

    useEffect(() => {
        // https://bobbyhadz.com/blog/react-hooks-exhaustive-deps
        regenerateWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(text === word){
            regenerateWord()
            setLength((curr) => curr + text.length)
            setText('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    function startInterval(){
        intervalId.current = setInterval(() => {
            setTime((currValue) => currValue + 1)
        }, 1000)
    }

    function stopInterval(){
        return clearInterval(intervalId.current)
    }

    return (
        <div>
            <h1>{word}</h1>
            <h2>{time}</h2>
            <h2>{time > 0 ? (length/time).toFixed(1) : 0}</h2>
            <input 
                value={text}
                onBlur={stopInterval}
                onFocus={startInterval}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
};

export default SpeedTest;
