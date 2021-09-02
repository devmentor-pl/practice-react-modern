import React, { useState, useEffect, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [counter, setCounter] = useState(0);
    const [valueInput, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const inputRef = useRef(null)

    useEffect(() => {
        if(word != null){
            const wordLength = word.length
            if(word === valueInput) {
                setWordCount(wordCount + wordLength );
                setText('')
                regenerateWord()
            }
        }
    }, [valueInput]);

    useEffect(() => {
        regenerateWord();
        return () => clearInterval(inputRef.current)
    }, []);

    const startTime = () => {
        inputRef.current = setInterval(() => {

             setCounter((value) => {
                const nextValue = value + 1;
                if (nextValue === 60) {
                    stopTime();
                }

                return nextValue;
            });

        }, 1000);
    };

    const stopTime = () => {
        clearInterval(inputRef.current);
        regenerateWord()
        inputRef.current = ''
    }

    return (
        <div>

            <h1>{word}</h1>
            <input 
                ref = {inputRef}
                onFocus={() => startTime()}
                onBlur={() => stopTime()}
                onChange={e => setText(e.target.value)}
                value={valueInput}
            />

            <p>Liczba wpisanych poprawnych znaków: <span style={{color: "red"}}>{wordCount}</span> w <span style={{color: "red"}}>{counter} sekund</span> </p>

        </div>
    );
};

export default SpeedTest;
