import React, { useState, useRef, useEffect } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const maxTime = 10;
    const [countdown, updateCountdown] = useState(maxTime);
    const [inputValue, setValue] = useState('');
    const [correctLetters, updateCorrectLetters] = useState(0)
    const [word, regenerateWord] = useRandomItem(['pies', 'kot', '1257', 'klątwa', 'a.b.c']);
    const timerRef = useRef(null);
    const renderTime = () => {
        timerRef.current = setInterval(() => {
            updateCountdown(time => {
                if(time !==0) {
                    return time - 1
                } 
                clearInterval(timerRef.current);
                return 0
            })
        }, 1000)
    };
    const compareValue = value => {
        setValue(value);
        // eslint-disable-next-line max-len
        if(value === word) { // wygląda na to, że w tym miejscu nie będę mogła skorzystać z inputValue zamiast e.target.value
            updateCorrectLetters(correctLetters + word.length); 
            setValue('')
            regenerateWord(); 
        }
    }

    const resetTest = () => {
        // eslint-disable-next-line max-len
        // czy przy tej ilości stanów (a potem resetów - jak poniżej) powinnam już pomyśleć o useReducer?
        updateCountdown(5);
        updateCorrectLetters(0);
        setValue('');
        clearInterval(timerRef.current)
    }
    
    useEffect(() => {
        regenerateWord();
        return () => clearInterval(timerRef.current)
    }, []);

    return (
        <div>
            <h1>{word}</h1>
            <p>Time: {countdown}</p>
            <input
                disabled={countdown === 0}
                onFocus={() => renderTime()}
                onChange={({target: {value}}) => compareValue(value)}
                value={inputValue}/>
            {countdown === 0 &&
            (<>
                <p>Your score: { correctLetters / maxTime} correct letters per second.</p>
                <button type='button' onClick={() => resetTest()}>Try again</button>
            </>)}
        </div>
    );
};

export default SpeedTest;
