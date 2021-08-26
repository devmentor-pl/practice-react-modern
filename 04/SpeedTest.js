import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript', 'Szpiglas', 'Rzepiska', 'Bieszczady', 'Lutowiska']);

    const [counter, setCounter] = useState(0);
    const [textInput, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const inputRef = useRef(null);

    useEffect(() => {
        if(word != null) {
            const wordLength = word.length 
            if(word === textInput) {
                setWordCount(wordCount + wordLength);
                setText('')
                regenerateWord()
            }
        }
    }, [textInput])

    useEffect(() => {
        regenerateWord();
        return () => clearInterval(inputRef.current)
    }, []);


    const startTime = () => {
        inputRef.current = setInterval(() => {

            setCounter((value) => {
                const nextValue = value + 1;
                if(nextValue === 60) {
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
                onChange={e=>setText(e.target.value)}
                value={textInput}   
            />

            <p>Number of correct letters: <span style={{color: "red"}}>{wordCount}</span> in <span style={{color: "red"}}>{counter} sec</span> </p>
        </div>
    );
};

export default SpeedTest;
