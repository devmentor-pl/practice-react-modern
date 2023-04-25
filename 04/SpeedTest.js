import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hooks';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [text, setText] = useState('');
    const [focused, setFocused] = useState(false);
    const [counter, setCounter] = useState(5);
    const [textLength, setTextLength] = useState(0);
    const [finish, setFinish] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const intervalRef = useRef(null);

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if (focused === true && !finish) {
            intervalRef.current = setInterval(() => {
                setCounter((currCounter) => {
                    const nextCounter = currCounter - 1;

                    if (nextCounter === 0) {
                        stopInterval();
                    }

                    return nextCounter;
                });
            }, 1000);
        }
        return () => stopInterval();
    }, [focused, finish]);

    useEffect(() => {
        if (text === word && !finish) {
            setTextLength((value) => value + text.length);
            setText('');
            regenerateWord();
        }
    }, [text, finish]);

    useEffect(() => {
        if (counter === 0) {
            setFinish(true);
            setText('');
            setDisabled(true);
        }
    }, [counter]);

    const handleClick = () => {
        setFinish(false);
        setDisabled(false);
        setCounter(5);
        setTextLength(0);
    };

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={text}
                disabled={disabled}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            {finish && <h2>Time&apos;s up!</h2>}
            <p>Time: {counter}s</p>
            <p>Correct letters: {textLength}</p>
            <button type="button" onClick={() => handleClick()}>
                Restart
            </button>
        </div>
    );
}

export default SpeedTest;
