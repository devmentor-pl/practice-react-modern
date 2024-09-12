import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

const SpeedTest = function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [text, setText] = useState('');
    const [time, setTime] = useState(0);
    const [textLength, setTextLength] = useState(0)
    const intervalId = useRef(null)

    useEffect(() => {
        regenerateWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (text === word) {
            regenerateWord();
            setTextLength(prevState => prevState + text.length)
            setText('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    function startInterval() {
        intervalId.current = setInterval(() => {
            setTime(currValue => currValue + 1)
        }, 1000)
    }

    function stopInterval() {
        clearInterval(intervalId.current)
    }

    return (
        <div>
            <h1>{word}</h1>
            <h2>czas: {time}s</h2>
            <h2>ilość znaków/s: {time !== 0 ? (textLength/time).toFixed(2) : 0}</h2>
            <input value={text} onFocus={startInterval} onBlur={stopInterval} onChange={e => setText(e.target.value)} />
        </div>
    );
};

export default SpeedTest;
