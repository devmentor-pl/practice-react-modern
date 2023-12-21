import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const INTERVAL_DURATION = 100;

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem([
        'devmentor.pl',
        'abc',
        'JavaScript',
        'React',
        'LoremIpsum',
    ]);
    const [inputText, setInputText] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [totalChars, setTotalChars] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        let intervalId;

        const handleInterval = () => {
            if (startTime) {
                const currentTimeInSeconds = (Date.now() - startTime) / 1000;
                setCurrentTime(currentTimeInSeconds);
            }
        };

        if (startTime) {
            intervalId = setInterval(handleInterval, INTERVAL_DURATION);
        }

        return () => clearInterval(intervalId);
    }, [startTime]);

    const handleInputChange = (e) => {
        const userInput = e.target.value;
        setInputText(userInput);

        if (userInput === word) {
            const endTime = Date.now();
            const elapsedTimeInSeconds = (endTime - startTime) / 1000;
            setTotalChars(totalChars + word.length);
            setElapsedTime(elapsedTime + elapsedTimeInSeconds);
            regenerateWord();
            setInputText('');
            setStartTime(null);
        } else if (!startTime) {
            setStartTime(Date.now());
        }
    };

    const handleInputBlur = () => {
        if (startTime && inputText === word) {
            const endTime = Date.now();
            const elapsedTimeInSeconds = (endTime - startTime) / 1000;
            setElapsedTime(elapsedTime + elapsedTimeInSeconds);
        }
        setStartTime(null);
    };

    return (
        <div>
            <h1>{word}</h1>
            <input
                ref={inputRef}
                value={inputText}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
            />
            <p>Time elapsed: {currentTime.toFixed(2)} seconds</p>
            {totalChars > 0 && (
                <p>Average speed: {(totalChars / elapsedTime).toFixed(2)} characters per second</p>
            )}
        </div>
    );
}

export default SpeedTest;
