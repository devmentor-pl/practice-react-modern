import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem([
        'devmentor.pl',
        'abc',
        'JavaScript',
        'Mateusz',
        'Klasa',
        'promocja',
        'talerz',
        'biedronka',
        'owoce',
    ]);

    const [inputText, updateInput] = useState('');
    const [time, updateTime] = useState(0);
    const [points, setPoints] = useState(0);
    const [roundTime, updateRoundTime] = useState(0);

    const intervalRef = useRef(null);

    useEffect(() => {
        if (word === inputText) {
            setPoints(points + word.length);
            updateInput('');
            regenerateWord();
        }
    }, [inputText]);

    useEffect(() => {
        regenerateWord();
    }, []);

    const startGame = () => {
        intervalRef.current = setInterval(() => {
            updateTime((timeElapsed) => Number(timeElapsed) + 1);
        }, 1000);
    };

    const stopGame = () => {
        clearInterval(intervalRef.current);
    };

    const resetGame = () => {
        updateInput('');
        updateTime(0);
        setPoints(0);
        stopGame();
    };

    useEffect(() => {
        if (time === roundTime) stopGame();
    }, [time]);

    return (
        <div>
            <h1>{word}</h1>
            Set round time:
            <input
                type="number"
                onChange={(e) => updateRoundTime(Number(e.target.value))}
                value={roundTime}
            />
            <br />
            Type words here:
            <input
                onChange={(e) => updateInput(e.target.value)}
                value={inputText}
                onBlur={stopGame}
                onFocus={startGame}
                disabled={time === roundTime}
            />
            <br />
            <button type="button" onClick={resetGame} label="none">
                Reset
            </button>
            <h3>Points: {points}</h3>
            <h3>Elapsed time: {time}s</h3>
        </div>
    );
}

export default SpeedTest;
