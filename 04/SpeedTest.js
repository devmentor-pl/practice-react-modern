import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem([
        'devmentor.pl',
        'abc',
        'JavaScript',
        'Cokolwiek',
        'Konstantynopolitańczykowianeczka',
    ]);
    const [inputValue, setInputValue] = useState('');
    const [time, setTime] = useState(0);
    const [totalChars, setTotalChars] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFocus = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
    };

    const handleBlur = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const handleChange = ({ target: { value } }) => {
        setInputValue(value);

        if (value === word) {
            setTotalChars((prevTotal) => prevTotal + word.length);
            setInputValue('');
            regenerateWord();
        }
    };

    return (
        <div>
            <h1>{word}</h1>
            <p>Time: {time} seconds</p>
            <p>Total characters typed: {totalChars}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
}

export default SpeedTest;
