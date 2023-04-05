import React, { useState, useRef, useEffect } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem([
        'devmentor.pl',
        'abc',
        'JavaScript',
        'Klawiatur',
        'Cząsteczka',
        'Jonasz',
        'chrząszcz',
        'chrabąszcz',
        'bocian',
    ]);
    const intervalId = useRef(null);
    const [text, setText] = useState('');
    const [timeout, setTimeout] = useState(0);
    const [letters, setLetters] = useState(0);

    useEffect(() => {
        regenerateWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (word === text) {
            setText('');
            setLetters(letters + word.length);
            regenerateWord();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    const changeHandler = (e) => setText(e.target.value);

    const startTiming = () => {
        intervalId.current = setInterval(() => {
            setTimeout((value) => value + 1);
        }, 1000);
    };

    const stopTiming = () => {
        clearInterval(intervalId.current);
    };

    const handleReset = () => {
        setText('');
        setLetters(0);
        setTimeout(0);
        regenerateWord();
    };

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={text}
                onFocus={startTiming}
                onBlur={stopTiming}
                onChange={(e) => changeHandler(e)}
            />
            <p>
                Brawo! Wypisałeś {letters} liter w ciągu {timeout} sekund!
            </p>
            <button type="button" onClick={handleReset}>
                RESET
            </button>
        </div>
    );
};

export default SpeedTest;
