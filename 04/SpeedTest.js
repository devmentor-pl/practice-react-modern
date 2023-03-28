import React, { useEffect, useState } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [typedWord, setTypedWord] = useState('');
    const [letters, setLetters] = useState("");

    useEffect(() => {
        regenerateWord();
    }, []);

    const handleInputChange = (event) => {
        if (startTime === 0) {
            setStartTime(performance.now());
        }
        setTypedWord(event.target.value);
        if (event.target.value === word) {
            setLetters(letters + typedWord);
        }
    };

    const handleBlur = () => {
        if (startTime !== 0) {
            setEndTime(performance.now());
        }
    };

    const elapsedTime = () => endTime !== 0 ? endTime - startTime : 0;

    return (
        <div>
            <h1>{word}</h1>
            <input value={typedWord} onChange={handleInputChange} onBlur={handleBlur} />
            {typedWord===word ? (regenerateWord(), setTypedWord('')) : null}
            <p>{(elapsedTime()/1000).toFixed(2)} sekund</p>
            {/* <p>{letters}</p> */}
            <p>{(letters.length === 0) || (letters.length/(elapsedTime()/1000)===Infinity)  ? '0' : (letters.length/(elapsedTime()/1000)).toFixed(2)} tempo wpisywania [litery/sekunde]</p>
        </div>
    );
}

export default SpeedTest;

