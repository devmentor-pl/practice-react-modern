import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const intervalRef = useRef(null);
    const timeLimitSec = 10;
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JS', 'usb']);
    const [text, setText] = useState('');
    const [time, setTime] = useState(0);
    const [points, setPoints] = useState(0);
    const [length, setLength] = useState(0);
    const [inFocus, setFocusState] = useState(false);

    const stopInterval = () => clearInterval(intervalRef.current);
    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setTime(step => {
                if (step < timeLimitSec) {
                    return step + 1;
                }
                stopInterval();
                return 0;
            }); // tutaj mnie linter grzecznie informuje o tym ze 'time' zostalo juz zadeklarowane w 'scope above', dlatego zmienilem na tic. jaka jest praktyka?
        }, 1000);
    };

    const handleUserInput = ({ target: { value } }) => {
        setText(value);
        if (text && text === word) {
            setPoints(points + 1);
            setLength(length + word.length);
            setText('');
            regenerateWord();
        }
    };

    const zeroClock = () => {
        setTime(0);
    };

    const handleClock = () => {
        if (inFocus === false) {
            setFocusState(true);
            zeroClock();
            startInterval();
        }
    };

    const handleRestart = () => {
        setPoints(0);
        setTime(0);
        setText('');
        setFocusState(false);
        regenerateWord();
    };

    useEffect(() => {
        regenerateWord();
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div>
            <h1>{word}</h1>
            <h2>
                Time: {time} / {timeLimitSec} s.
            </h2>
            <h2>Correct words: {points}</h2>
            <p>
                {time === 0
                    ? `Your score is ${length * (60 / timeLimitSec)} chars per minute.`
                    : 'Go!'}
            </p>
            <input
                ref={intervalRef}
                value={text}
                onChange={handleUserInput}
                onBlur={stopInterval}
                onFocus={handleClock}
            />
            <button name="restart" type="button" onClick={handleRestart}>
                Restart
            </button>
        </div>
    );
};

export default SpeedTest;
