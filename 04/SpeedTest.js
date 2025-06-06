import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [text, setText] = useState('');
    const [time, setTime] = useState(0);
    const [wordLength, setWordLength] = useState(0);
    const intervalRef = useRef(null);
    useEffect(() => {
        regenerateWord();
    }, []);
    useEffect(() => {
        if (text === word) {
            setWordLength((prev) => prev + word.length);
            setText('');
            regenerateWord();
        }
    });
    // eslint-disable-next-line no-console
    console.log('te', text, word);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleFocus = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
    };

    const handleBlur = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };
    return (
        <div>
            <h1>{word}</h1>
            <input value={text} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
            <p>Czas: {time}</p>
            <p>Ilość wpisanych znaków: {wordLength}</p>
        </div>
    );
}

export default SpeedTest;
