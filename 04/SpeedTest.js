/* eslint-disable react/function-component-definition */
import React, { useEffect,useRef,useState } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript', 'ScreamingFrog', 'sitebulb', 'ryTE', 'algoroo' ]);
    const [time, setTime] = useState(0);
    const [typedWord , setTypedWord] = useState('');
    const [wordLen, setWordLen] = useState(0);
    const [showResult, isShowResult] = useState(false);
    const intervalRef = useRef(null);
    const inputRef = useRef('');

    useEffect(() => {
        regenerateWord();
    }, []);

    function countTime(){
        // eslint-disable-next-line no-shadow
        setTime(time => time + 1)
    }

    function startTimer(){
        intervalRef.current = setInterval(countTime,1000);
    }

    function stopTimer(){
        clearInterval(intervalRef.current);
    }

    function checkWord(e){
        const {value} = e.target
        setTypedWord(value)
    }

    function addWordLenght(wordLength){
        setWordLen(wordLen + wordLength)
    }

    function clearInput(){
        inputRef.current.value = '';
        setTypedWord('')
    }

    useEffect(()=>{
        if(typedWord === word){
            const wordLength = typedWord.length;
            addWordLenght(wordLength);
            clearInput();
            regenerateWord();
        }
    },[typedWord])

    function handleClickReset(){
        setTime(0);
    }

    function handleClickStartAgain(){
        handleClickReset();
        clearInput();
        setWordLen(0)
        isShowResult(false)
    }

    function handleShowResult(){
        isShowResult(true)
    }

    return (
        <div>
            <h1>{word}</h1>
            <input
                onFocus={startTimer}
                onBlur={stopTimer}
                onChange={checkWord}
                ref={inputRef}
            />
            <p>Licznik czasu: {time} s.</p>
            <button type="button" onClick={handleClickReset}>Resetuj Czas</button>
            <br/>
            <button type="button" onClick={handleClickStartAgain}>Zacznij od nowa</button>
            <br/>
            <button type="button" onClick={handleShowResult}>Pokaz wynik</button>
            {showResult ? <p>W: {time} sekund,  wpisano: {wordLen} znaków</p> : null}
        </div>
    );
};

export default SpeedTest;
