import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

import { welshWords, welshWordsWithMeanings } from './db';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(welshWords);
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [wordsLength, setWordsLength] = useState(0);
    const [writtenWords, setWrittenWords] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [endTime, setEndTime] = useState(5);
    const [gameOn, setGameOn] = useState(false);

    const intervalRef = useRef(null);
    const inputRef = useRef(null);

    const startTimer = () => {
        const isCounterValid = counter < endTime;
        if (!isCounterValid) return;

        intervalRef.current = setInterval(() => {
            setCounter((value) => value + 1);
        }, 1000);
    };

    useEffect(() => {
        if (endTime === counter) {
            clearInterval(intervalRef.current);
            inputRef.current.blur();
            setInputValue('');
            setGameOn(false);
            intervalRef.current = null;
            setCounter(0);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter]);

    const gameInit = () => {
        setWordsLength(0);
        setWrittenWords([]);
        setGameOn(true);
        regenerateWord();
    };

    const handleFocus = () => {
        startTimer();

        if (!gameOn) {
            gameInit();
        }
    };

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setInputValue(value);

        if (value.trim() !== word) return;

        setWordsLength((prevState) => prevState + value.length);
        setWrittenWords((prevState) => [...prevState, word]);
        regenerateWord();
        setInputValue('');
    };

    const handleBtnClick = () => {
        inputRef.current.focus();
    };

    const printResults = () => {
        const uniqueWords = new Set(writtenWords);

        const definitionsJSX = welshWordsWithMeanings
            .filter((item) => uniqueWords.has(item.name))
            .map((obj) => {
                const { id, name, meaning } = obj;
                return (
                    <li key={id}>
                        <p>
                            <strong>{name}</strong> means &quot;{meaning}&quot;
                        </p>
                    </li>
                );
            });
        return definitionsJSX;
    };

    return (
        <div>
            <p>
                You have got <strong>{endTime} seconds</strong> to write as many
                <strong>Welsh words</strong> as you can. Then we will provide you with their
                definitions.
            </p>
            <h1>{gameOn ? word : '>Here you will see the word to type<'}</h1>
            <input
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={stopInterval}
                onChange={handleChange}
                value={inputValue}
            />
            <p>timer: {counter}</p>
            <p>letters typed: {wordsLength}</p>
            <button onClick={handleBtnClick} type="button" disabled={gameOn}>
                START GAME
            </button>
            <ul>{!gameOn && printResults()}</ul>
        </div>
    );
}

export default SpeedTest;
