import React, { useEffect, useRef, useState, } from 'react';
import useRandomItem from './hook';

const SpeedTest = function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [text, putText] = useState ('');
    const [timing, setTiming] = useState(0);
    const [length, putlength] = useState(0);


    const intervalRef = useRef(null);


    useEffect(() => {


        regenerateWord();

    }, []);

    useEffect(() => { 
        if (text ===word) {
            regenerateWord();
            putlength((curr) => curr + text.length);
            putText('');
        }
    }, [text])
    


    function startInterval() {
        intervalRef.current = setInterval(() => {
            setTiming((currentValue) => currentValue + 1);
        }, 1000);
    }

    function stopInterval() {
        clearInterval(intervalRef.current);
    }

    return (
        <div>
            <h1>{word}</h1>
            <h2>{timing > 0 ? length / timing:0}</h2>
            <h3>{timing}</h3>
            <input 
                value={text} 
                onBlur={stopInterval} 
                onFocus={startInterval} 
                onChange={(e)=>putText(e.target.value)}/>
        </div>
    );
};

export default SpeedTest;
