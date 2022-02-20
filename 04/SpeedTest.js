import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem([
        'devmentor.pl',
        'masło',
        'JavaScript',
        'rękawiczka',
        'żołnierz',
        'Rafał',
        'ambulans',
    ]);

    const [counter, setCounter] = useState(60);

    const [wordCounter, setWordCounter] = useState(0);

    const showResult = {
        display: 'block',
    };
    const hideResult = {
        display: 'none',
    };

    const intervalID = useRef(null);

    useEffect(() => {
        regenerateWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (counter === 0) {
            clearInterval(intervalID.current);
        }
    });

    const startCounting = () => {
        intervalID.current = setInterval(() => {
            setCounter((value) => value - 1);
        }, 1000);
    };

    const stopCounting = () => {
        clearInterval(intervalID.current);
    };

    const handleInput = (e) => {
        const inputValue = e.target.value;

        if (inputValue === word && counter > 0) {
            e.target.value = '';
            regenerateWord();

            setWordCounter(wordCounter + word.length);
        }
    };

    return (
        <div>
            <h1>Wpisz słowo: {word}</h1>
            <h2>Pozostało Ci: {counter}s</h2>
            <p style={counter <= 0 ? showResult : hideResult}>Gratulacje! Napisałeś {wordCounter} znaków na minutę!</p>
            <input
                onFocus={() => startCounting()}
                onBlur={() => stopCounting()}
                ref={intervalID}
                onChange={(e) => handleInput(e)}
                disabled={counter <= 0 ? 'disabled' : ''}
            />
        </div>
    );
}

export default SpeedTest;
