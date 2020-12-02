import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [text, setText] = useState('');
    const [seconds, setSeconds] = useState(0);
    const [doneWords, setDoneWords] = useState([]);
    const intervalRef = useRef(null);

    const showTime = sec => {
        return new Date(sec * 1000).toISOString().substr(11, 8);
    };

    const stopInterval = () => {
        if (intervalRef !== null) {
            setSeconds(0);
            clearInterval(intervalRef.current);
        }
    };

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setSeconds(value => value + 1);
        }, 1000);
    };

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if (text === word) {
            setDoneWords(words => [...words, { word, seconds }]);
            setSeconds(0);
            setText('');

            regenerateWord();
        }
    }, [text]);

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                onFocus={() => startInterval()}
                onBlur={() => stopInterval()}
            />
            <p>Time: {showTime(seconds)}</p>
            <h2>Results:</h2>
            <ul>
                {doneWords.map(item => (
                    <li key={`${item.text}${item.seconds}`}>
                        {item.word} - {showTime(item.seconds)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpeedTest;
