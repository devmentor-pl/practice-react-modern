import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [inputValue, setInputValue] = useState('');
    const [letterCounter, setLetterCounter] = useState(0);
    const [timer, setTimer] = useState(0);
    const [gameTime, setGameTime] = useState(0);
    const [isPlay, setIsPlay] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        regenerateWord();
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (inputValue === word) {
            setLetterCounter(letterCounter + word.length);
            setInputValue('');
            regenerateWord();
        }
    }, [inputValue]);

    const refreshGame = () => {
        clearInterval(intervalRef.current);
        regenerateWord();
        setIsPlay(false);
        setInputValue('');
        setTimer(0);
    };

    const gameHandler = () => {
        setIsPlay(true);
        setLetterCounter(0);
        intervalRef.current = setInterval(() => {
            setTimer((currTime) => {
                const nextTime = currTime - 1;
                if (nextTime === 0) {
                    clearInterval(intervalRef.current);
                    setIsPlay(false);
                    setInputValue('');
                }
                return nextTime;
            });
        }, 1000);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setGameTime(e.target.select.value);
        setTimer(e.target.select.value);
    };

    const showLastRoundInfo = () => {
        const roundInfo = (letterCounter * 60) / gameTime;
        return !Number.isNaN(roundInfo)
            ? `last round typing speed: ${Math.round(roundInfo)} chars/min`
            : null;
    };

    const showInfo = () => (timer === 0 ? showLastRoundInfo() : `timer: ${timer}`);

    return (
        <div>
            <form onSubmit={(e) => submitHandler(e)}>
                <label htmlFor="select">
                    Choose game time:
                    <select name="select" id="select">
                        <option value={15}>15s</option>
                        <option value={30}>30s</option>
                        <option value={45}>45s</option>
                        <option value={60}>60s</option>
                    </select>
                </label>
                <input type="submit" value="accept" disabled={timer !== 0} />
            </form>
            <div>
                <h1>{timer !== 0 && isPlay ? word : 'word to type will appear here'}</h1>
                <input
                    disabled={timer === 0}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => gameHandler()}
                    placeholder={timer === 0 ? 'choose game time' : null}
                />
                <input
                    type="button"
                    value="refresh game"
                    onClick={() => refreshGame()}
                    disabled={!isPlay && timer === 0}
                />
                <p>{showInfo()}</p>
            </div>
        </div>
    );
};

export default SpeedTest;
