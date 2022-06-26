import React, { useEffect, useRef, useState } from 'react';
import reactDom from 'react-dom';
import useRandomItem from './hook';

// 
function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['dcarr', 'abc', 'ttasa']);
    const [count, setCount] = useState(0);
    const [currInput, setCurrInput] = useState("");
    const intervalRef = useRef(null);
    const [correct, setCorrect] = useState(0);
    const [status, setStatus] = useState("waiting")

    function start () {
        intervalRef.current = setInterval(() => {
            setCount((prevCount => prevCount + 1))
        }, 1000);
        checkMatch() 

    }

    function checkMatch () {
        if(word===currInput) {
            setCurrInput("");
            regenerateWord()
            if(status !=='started') {
                setStatus('started');
                setCorrect((prevCorrect => prevCorrect + word.length))}
                // console.log(correct);
        }           
    }

    function stop () {
        clearInterval(intervalRef.current);
    }

    useEffect(() => {
        regenerateWord();
    }, []);

    return (
        <div>
            <h1>{word}</h1>
            <input 
            onFocus={start}
            onBlur={stop}
            onChange={(e)=>setCurrInput(e.target.value)}
            value = {currInput}
            />
            <div>Seconds count: {count}</div>
            {status=== 'started' && (
            <div> Words per second: {(correct/count).toFixed(2)} </div>
            )}
        </div>
    );
}

export default SpeedTest;
