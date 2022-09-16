import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem([
        'abc',
        'JavaScript',
        'devmentor.pl',
        'papaja',
        'dom',
        'rododendron',
        'klawiatura',
    ]);

    const [text, setText] = useState('');
    const [counter, setCounter] = useState(0);

    const intervalRef = useRef(null);

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        regenerateWord();
    }, []);

    const startCounter = () => {
        intervalRef.current = setInterval(() => {
            setCounter((counter) => counter + 1);
        }, 1000);
    };

    const onBlur = () => {
        stopInterval();
    };

    const onInput = (e) => {
        const word1 = word;
        const inputValue = e.target.value;

        if (word1 === inputValue) {
            stopInterval();
            setCounter(counter === 0);

            startCounter();

            regenerateWord();

            const input = document.querySelector('input');
            input.value = '';
        }

        setText({ text: inputValue });
        console.log(text);
    };

    return (
        <div>
            <h1>{word}</h1>
            <h5>
                {counter} {counter > 0 ? 's' : null}
            </h5>
            <input onFocus={startCounter} onBlur={onBlur} onInput={onInput} />
        </div>
    );
}

export default SpeedTest;
