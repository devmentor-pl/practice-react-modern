import React, { useEffect, useState } from 'react';
import useRandomItem from './hook';

let intervalId;

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);

    const [input, setInput] = useState(null);
    const [time, setTime] = useState(0);
    const [result, setResult] = useState();

    useEffect(() => {
        regenerateWord();
    }, []);

    const onChangeInput = (e) => {
        setInput(e.target.value);
    };

    const onFocusInput = (e) => {
        console.log('Active');

        intervalId = setInterval(() => setTime((time) => time + 1), 1000);
    };

    const onBlurInput = (e) => {
        e.target.value = '';
        console.log('Not Active');
        console.log(time);
        clearInterval(intervalId);
        if (word === input) {
            console.log('Wyraz wpisany poprawnie!' + 'Twój wynik to: ' + time + 's');
            setResult('Wyraz Wpisany poprawnie. Twój wynik to:' + time + 's');
        } else {
            console.log('Źle wpisany wyraz!');
            setResult('Źle wpisany wyraz!');
        }
    };

    return (
        <div>
            <h1>{word}</h1>
            <p>{input}</p>

            <p>{result}</p>
            <input onBlur={onBlurInput} onFocus={onFocusInput} onChange={onChangeInput} />
        </div>
    );
};

export default SpeedTest;
