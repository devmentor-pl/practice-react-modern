import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [inputValue, setInputValue] = useState('')
    const [counter, setCounter] = useState(0)
    const [correctWordsLength, setCorrectWordsLength] = useState(0)

    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const intervalRef = useRef(null)

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if (inputValue === word) {
            setCorrectWordsLength(prevNumber => prevNumber + word.length)
            setInputValue('')
            regenerateWord()
        }
    }, [inputValue])

    const changeHandler = (e) => {
        setInputValue(e.target.value)
    }

    const focusHandler = () => {
        intervalRef.current = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1) // dlaczego nie zadziała po prostu setCounter(counter + 1) tak jak było w przykładzie o useState w pdf od Ciebie?
        }, 1000)
    }

    const blurHandler = () => {
        clearInterval(intervalRef.current)
    }

    const clickHandler = () => {
        setCounter(0)
        setCorrectWordsLength(0)
        setInputValue('')
        regenerateWord()
    }

    return (
        <div>
            <h1>{word}</h1>
            <h3>Czas: {counter}</h3>
            <h3>Długość poprawnie wpisanych wyrazów: {correctWordsLength}</h3>
            <input value={inputValue}
                onChange={changeHandler}
                onFocus={focusHandler}
                onBlur={blurHandler}
            />
            <button type="button" onClick={clickHandler}>Zacznij od nowa</button>
        </div>
    );
}

export default SpeedTest;
