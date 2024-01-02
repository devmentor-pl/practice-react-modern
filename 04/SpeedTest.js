import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [userInput, setUserInput] = useState('');
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [totalChars, setTotalChars] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
    }, []);

    const handleInput = (e) => {
        setUserInput(e.target.value);
    };

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTimeElapsed(prev => prev + 1);
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    }

    useEffect(() => {
        if (userInput === word) {
            setTotalChars(prev => prev + word.length);
            regenerateWord();
            setUserInput('');
            stopTimer();
        }
    }, [userInput, word, regenerateWord]);

    return (
        <div>
            <h1>{word}</h1>
            <input 
                value={userInput}
                onChange={handleInput}
                onFocus={startTimer}
                onBlur={stopTimer}    
            />
            <p>Time Elapsed: {timeElapsed} seconds</p>
            <p>Total Characters Type Correctly: {totalChars}</p>
        </div>
    );
}

export default SpeedTest;
