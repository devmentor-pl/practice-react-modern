import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

const SpeedTest = function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [textValue, setTextValue] = useState('');
    const [timeValue, setTimeValue] = useState(0);
    const [lengthValue, setLengthValue] = useState(0);
    const intervalId = useRef(null);

    useEffect(() => {
        regenerateWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (textValue === word) {
            regenerateWord();
            setLengthValue((prevLength) => prevLength + textValue.length);
            setTextValue('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [textValue]);

    function startTime() {
        intervalId.current = setInterval(() => {
            setTimeValue((prevValue) => prevValue + 1);
        }, 1000);
    }

    function stopTime() {
        clearInterval(intervalId.current);
    }

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={textValue}
                onBlur={stopTime}
                onFocus={startTime}
                onChange={(e) => {
                    setTextValue(e.target.value);
                }}
            />
            <h2>Czas pisania {timeValue}</h2>
            <h2>Szybkosc pisanie słow {timeValue > 0 ? (lengthValue / timeValue).toFixed(1) : 0}</h2>
        </div>
    );
};

export default SpeedTest;
