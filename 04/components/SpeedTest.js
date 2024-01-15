import React, { useEffect, useState, useRef } from 'react';
import Time from './Time';
import WordsLeft from './WordsLeft';
import useRandomItem from '../hook';

const wordsList = ['abc', '123', 'fff'];

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(wordsList);
    const [inputValue, setInputValue] = useState('');
    const [time, setTime] = useState(0);
    const [length, setLength] = useState(0);
    const [words, setWords] = useState([]);
    const intervalRef = useRef(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const startCount = () => {
        intervalRef.current = setInterval(() => {
            setTime((value) => value + 1);
        }, 1000);
    };

    const stopCount = () => {
        clearInterval(intervalRef.current);
    };

    const addWord = (newWord) => {
        setWords(() => [...words, newWord]);
    };

    const removeUsedWord = (usedWord) => {
        const wordIndex = wordsList.findIndex((el) => el === usedWord);
        wordsList.splice(wordIndex, 1);
    };

    const winAlert = () => {
        const calculateSpeed = length / time;

        if (wordsList.length === 0) {
            // eslint-disable-next-line
            alert(
                `Gratulacje. Wpisałeś ${words.length} słowa o łącznej długośći ${length} znaków. Potrzebowałeś na to ${time} sekund. Piszesz z szybkośią ${calculateSpeed} znaków na sekundę.`,
            );
            stopCount();
        }
    };

    const checkIfCorrect = () => {
        if (inputValue === word) {
            setLength((value) => value + inputValue.length);
            setInputValue('');
            addWord(inputValue);
            removeUsedWord(word);
            regenerateWord();
        }
        winAlert();
    };

    useEffect(() => {
        checkIfCorrect();
    }, [inputValue]);

    useEffect(() => {
        regenerateWord();
    }, []);

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={inputValue}
                onChange={handleInputChange}
                onFocus={startCount}
                onBlur={stopCount}
                ref={intervalRef}
            />
            <WordsLeft data={wordsList.length} />
            <Time time={time} />
        </div>
    );
}

export default SpeedTest;
