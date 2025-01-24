import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

const renderTime = (total) => {
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
};

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [userWord, setUserWord] = useState('');
    const [counter, setCounter] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const [result, setResult] = useState({ words: 0, chars: 0 });

    const intervalId = useRef(null);

    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);

    useEffect(() => {
        regenerateWord();

        if (isFocused) {
            intervalId.current = setInterval(() => {
                setCounter((value) => value + 1);
            }, 1000);
        }

        return () => clearInterval(intervalId.current);
    }, [isFocused]);

    useEffect(() => {
        if (word === userWord) {
            /* eslint-disable arrow-body-style */
            setResult((prevResult) => {
                return {
                    words: prevResult.words + 1,
                    chars: prevResult.chars + word.length,
                };
            });
            setUserWord('');
            regenerateWord();
        }
    }, [userWord]);

    return (
        <div>
            <h1>{word}</h1>
            <input
                value={userWord}
                onChange={(e) => setUserWord(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <div>
                <div>{renderTime(counter)}</div>
                <div>
                    Result: {result.words} contain {result.chars} characters
                </div>
            </div>
        </div>
    );
}

export default SpeedTest;
