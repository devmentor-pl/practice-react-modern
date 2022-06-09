import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [time, setTime] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [typedCharacters, setTypedCharacters] = useState(0);
    const timeRef = useRef(null)

    useEffect(() => {
        regenerateWord();
        return () => clearInterval(timeRef.current)
    }, []);

    useEffect(() => {
        if(inputValue === word) {
            const amountOfCharacters = inputValue.length;
            setTypedCharacters(value => value + amountOfCharacters)
            setInputValue('')
        }
    }, [inputValue])

    
    const timeStart = () => {
        timeRef.current = setInterval( () => {
            setTime(value => value + 1)
        }, 1000)
    }

    const timeStop = () => {
        clearInterval(timeRef.current)
    }

    const resetGame = () => {
        setTime(0);
        setTypedCharacters(0);
    }

    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    return (
        <>
            <div style={style}>
                <h1>{word}</h1>
                <input onFocus={() => timeStart()} onBlur={() => timeStop()} onChange={ e => setInputValue(e.target.value)} value={inputValue}/>
            </div>
            <div style={style}>
                <div>TIME: {time}</div>
                <div>TYPED CHARACTERS: {typedCharacters}</div>
                <button type= "button" onClick={ () => resetGame()}>RESTART</button>
            </div>
        </>
    );
}

export default SpeedTest;
