import React, { useEffect, useRef, useState, useReducer } from 'react';
import useRandomItem from './hook';
import './style.css';
import Table from './table';

const SpeedTest = () => {
    const [generatedWord, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);

    useEffect(() => {
        regenerateWord();
    }, []);

    const [text, setText] = useState('');
    const [taskTime, setTime] = useState(0);
    const [timeArray, setArray] = useState([]);

    function reducer(state, action) {
        switch (action.type) {
            case 'word':
                return { word: text, time: 0, init: true };
            case 'time':
                setText('');
                return {
                    word: state.word,
                    time: timeArray[timeArray.length - 1],
                    init: false,
                };
            default:
                throw new Error();
        }
    }

    const [signs, setSigns] = useState(0);
    const [results, dispatch] = useReducer(reducer, {
        time: false,
    });
    const [resultArray, setResArr] = useState([]);

    function commonSameCount(s1, s2) {
        const s1Array = s1.split('');
        const s2Array = s2.split('');

        let count = 0;
        let index = 0;

        s1Array.filter(element => {
            index = s2Array.findIndex(elementSec => elementSec === element);
            if (index >= 0) {
                count += 1;
                return s2Array.splice(index, 1);
            }
            return false;
        });
        return count;
    }

    const intervalRef = useRef();

    const countTime = () => {
        const id = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        intervalRef.current = id;
    };

    useEffect(() => {
        if (generatedWord && text) {
            const counted = commonSameCount(generatedWord, text);
            setSigns(counted);
        }
        if (text === generatedWord) {
            setArray(oldArray => [...oldArray, taskTime]);

            dispatch({ type: 'word' });
            dispatch({ type: 'time' });
            clearInterval(intervalRef.current);
            setTime(0);
            regenerateWord();
            countTime();
        }
    }, [text]);

    useEffect(() => {
        if (results.time !== false) {
            setResArr(oldArray => [...oldArray, results]);
        }
    }, [results.time]);
    return (
        <div className="container">
            <h1 className="container__heading">Wylosowany wyraz: {generatedWord}</h1>
            <div>
                <h1 className="container__heading">Czas w sekundach: {taskTime}</h1>
            </div>
            <input
                value={text}
                onChange={event => {
                    setText(event.target.value);
                }}
                onFocus={() => countTime()}
                onBlur={() => clearInterval(intervalRef.current)}
            />
            <Table tableData={resultArray} />
        </div>
    );
};

export default SpeedTest;
