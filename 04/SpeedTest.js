import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);

    const [text, setText] = useState('');
    const [timer, setTimer] = useState(0);
    const [letters, setLetters] = useState(0);

    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if (text === word) {
            setText('');
            setLetters(letters + text.length);
            regenerateWord();
        }
    }, [text]);

    const changeHandler = (e) => {
        setText(e.target.value);
    };

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTimer((time) => time + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    };

    const resetGame = () => {
        setText('');
        setLetters(0);
        setTimer(0);
        regenerateWord();
    };

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={text}
                onChange={(e) => changeHandler(e)}
                onFocus={() => startTimer()}
                onBlur={() => stopTimer()}
            />
            <p>
                You wrote {letters} letters in {timer} seconds!
            </p>
            <button type="button" onClick={() => resetGame()}>
                Reset the game
            </button>
        </div>
    );
};

export default SpeedTest;
