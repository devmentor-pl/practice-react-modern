import React, {useState,  useEffect, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);

    const [text, setText] = useState('');
    const [timer, setTimer] = useState(0);
    const [counter, setCounter] = useState(0);
    const [speed, setSpeed] = useState();
    const intervalRef = useRef(null);
    
    useEffect(() => {
        regenerateWord();
    }, []);

    const runTimer = () => {
        setTimer(0); // jesli ma liczyć od poczatku
        setCounter(0) // jw.
        setSpeed(0);
        intervalRef.current = setInterval(()=>{
            setTimer(val=>val+1)
        }, 1000)
    }

    const stopTask = () => {
        clearInterval(intervalRef.current);
        setSpeed(()=> (counter*60/timer).toFixed() )
    }

    useEffect(() => {
        if (word === text) {
            regenerateWord();
            setCounter(count => count+word.length);
            setText('')
        };
    }, [text]);
    
    return (
        
        <div>
            <h1>{word}</h1>
            <input 
                onChange={e=>setText(e.target.value)}
                onFocus={e=>runTimer(e)}
                onBlur={e=>stopTask(e)}
                value ={text}
            />
            <p>{`Szybkośc pisania na klawiaturze: ${speed || '___'} znaków/min`}</p>
        </div>
    );
};

export default SpeedTest;
