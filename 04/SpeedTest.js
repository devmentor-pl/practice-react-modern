import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);

    useEffect(() => {
        regenerateWord();
    }, []);

    const [text, setText] = useState('');
    const [timer, setTimer] = useState(1);
    const intervalRef = useRef(null);
    const [wordsLength, setWordsLength] = useState(0);

    const compareWords = (userWord, generatedWord) => {
        if(userWord === generatedWord) {
            countData(generatedWord);
            regenerateWord();
            setText('');
        };
    };

    const updateValue = e => {
        const { value } = e.target;
        setText(value);
        compareWords(value, word);
    };

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    }

    const countData = word => {
        setWordsLength(length => length + word.length);
    }

    const wordsPerMinute = () => {
        return (wordsLength/timer*60).toFixed(2);
    }

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={ text }
                onChange={ updateValue }
                onFocus={ () => startTimer() }
                onBlur={ () => stopTimer() }/>
            <p> Czas: {timer}  </p>
            <p> Wpisanych liter: { wordsLength }</p>
            <p> Liter na minutę: { wordsPerMinute() }</p>
        </div>
    );
};

export default SpeedTest;
