import React, { useState, useEffect, useRef } from 'react';
import useRandomItem from './hook';

const SpeedTest = function SpeedTest() {
    const [word, regenerateWord] = useRandomItem([
        'devmentor.pl',
        'abc',
        'JavaScript',
        'React',
        'programowanie',
        'podstawa',
        'praca',
        'projekt',
        'travel',
        'dom',
    ]);

    const [counter, setCounter] = useState(0);
    const [text, setText] = useState('');
    const [length, setLength] = useState(0);

    const intervalId = useRef(null);

    useEffect(() => {
        regenerateWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (text === word) {
            regenerateWord();
            setLength((curr) => curr + text.length);
            setText('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    function startInterval() {
        intervalId.current = setInterval(() => {
            setCounter((currValue) => currValue + 1);
        }, 1000);
    }

    function stopInterval() {
        clearInterval(intervalId.current);
    }

    return (
        <div>
            <h1>{word}</h1>
            <h2>{counter}</h2>
            <h2>
                Your speed: {counter > 0 ? Math.round(length / (counter / 60)) : 0} CPM - characters
                per minute
            </h2>
            <input
                value={text}
                onFocus={startInterval}
                onBlur={stopInterval}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
};

export default SpeedTest;
