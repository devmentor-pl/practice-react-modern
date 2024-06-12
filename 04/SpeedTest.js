/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript', 'polymorphism', 'object', 'semantics', 'component', 'function', 'data', 'inheritance', 'boolean', 'string', 'C++', 'Python', 'number', 'Java', 'Ruby', 'React', 'NodeJS', 'Vue', 'Angular']);
    const [inputValue, setValue ] = useState('');
    const [time, setTime ] = useState(0);
    const [correctSigns, setCorrectSigns ] = useState(0);
    const [disableValue, setIsDisabled] = useState(false);
    const intervalId = useRef(null);
    const [buttonReset, setButtonDisabled] = useState(true);
    const [finish, setFinish] = useState(10)

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if(time === finish){
            setIsDisabled(true)
            setValue('')
            clearInterval(intervalId.current);
        }
        if(time === 0){
            clearInterval(intervalId.current);
        }
    },[time, finish]);

    useEffect(() => {
        if(inputValue === word) {
            setCorrectSigns(value => value + inputValue.length);
            setValue('');
            regenerateWord();
        }
    },[inputValue])

    const handleFocus = () => {
        intervalId.current = setInterval(() => {
            setTime(value => value + 1)
        }, 1000);
        setButtonDisabled(false); 
    }
    const handleBlur = () => {
        clearInterval(intervalId.current);
    }
    const handleReset = () => {
        setCorrectSigns(0);
        setTime(0);
        setValue('');
        setIsDisabled(false);
        setButtonDisabled(true)
    }
    const handleSelected = (e) =>{

        setFinish(Number(e.target.value));
        handleReset();
    }
    return (
        <div>
            <h1>How many correct signs can you write? </h1>
            <label htmlFor="timeDropdown">Choose time:
                <select id="timeDropdown" onChange={handleSelected}>
                    <option value="10">10</option>
                    <option value="30">30</option>
                    <option value="60">60</option>
                </select>
                sec
            </label>
            <h1>{word}</h1>
            <input disabled={disableValue} ref={intervalId} value={inputValue} onFocus={handleFocus} onBlur={handleBlur} onChange={(e) => setValue(e.target.value)}/>
            <p>Correct signs: {correctSigns}</p>
            <p>Time: {time}</p>
            <input  disabled={buttonReset} type="button" value="Reset" onClick={handleReset} />
        </div>
    );
}

export default SpeedTest;
