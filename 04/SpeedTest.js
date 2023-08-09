import React, { useEffect,useRef, useState } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [counter,setCounter] = useState(0);
    const [userInput, setUserInput] = useState("")
    const [results, setResult] = useState([]);
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);

    const intervalRef = useRef(null);

    const focusHandler = () => {
        intervalRef.current = setInterval(()=> {
            setCounter(currCounter => currCounter+0.1)
        },100)
    }

    const blurHandler = () => {
        clearInterval(intervalRef.current)
    }

    const changeHandler = ({value}) => {
        setUserInput(value);
    }

    const runNewWord = () => {
        setUserInput("");
        setCounter(0);
        regenerateWord();
        focusHandler();
    }


    useEffect(() => {
        if(word===null){ 
            regenerateWord();
        } else if (userInput===word){
            clearInterval(intervalRef.current)
            setResult(currResults => [...currResults,`${currResults.length+1}. ${word} ${counter.toFixed(3)} s`]);
            runNewWord();
        }
    }, [userInput]);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = (timeInSeconds % 60).toFixed(1);

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds}`;
    };

    const generateResults = () => {
        const resultsList = results.map((result)=> (
            <li>{result}</li>
        ))
        return resultsList
    }

    return (
        <div>
            <h1>{word}</h1>
            <input 
                onFocus={ () => focusHandler()}
                onChange={(e) => changeHandler(e.target)}
                onBlur={() => blurHandler()}
                value={userInput}
            />
            <h2>{formatTime(counter)}s</h2>
            <ul>
                <h3>Results</h3> 
                {generateResults()}
            </ul>
        </div>
    );
};

export default SpeedTest;
