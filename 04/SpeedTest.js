import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['abc']);
    const [focused, setFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);
    
    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
    };
    const stopTimer = () => {
        clearInterval(intervalRef.current);
    }
    const onFocusHandler = () => {
        setFocused(!focused);
        startTimer()
    };
    const onBlurHandler = () => {
        setFocused(!focused);
        stopTimer()
    }
    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => { 
        regenerateWord(); 
        if(inputValue === word && focused) {
            console.log(inputValue.length)
            regenerateWord()
            setInputValue('');
        }
    }, [inputValue, word]);

    return (
        <div>
            <h1>{word}</h1>
            {time < 10 ? <h2>0{time}</h2>:<h2>{time}</h2>}
            <input value={inputValue} onFocus={onFocusHandler} onBlur={onBlurHandler} onChange={handleOnChange}/>
        </div>
    );
}

export default SpeedTest;
