import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);

    useEffect(() => {
        regenerateWord();
    }, []);

    const [text, setText] = useState('');
    const [time, setTime] = useState(0);
    const [timeArray, setArray] = useState([]);
    const [signs, setSigns] = useState(0);

    function commonSameCount(s1, s2) {
        const s1Array = s1.split('');
        const s2Array = s2.split('');

        let count = 0;
        let index = 0;

        s1Array.filter(element => {
            index = s2Array.findIndex(elementSec => elementSec === element);
            if (index >= 0) {
                count += 1;
                s2Array.splice(index, 1);
            }
        });
        return count;
    }

    const intervalRef = useRef();

    const timerFunc = () => {
        const id = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        intervalRef.current = id;
    };

    useEffect(() => {
        if (word && text) {
            const counted = commonSameCount(word, text);
            console.log(counted);
            setSigns(counted);
        }
        if (text === word) {
            setText('');
            clearInterval(intervalRef.current);
            setArray(oldArray => [...oldArray, time]);
            setTime(0);
            regenerateWord();
            timerFunc();
        }
    }, [text]);
    useEffect(() => {
        console.log(timeArray);
    }, [timeArray]);
    return (
        <div>
            <h1>
                {word}
                {time}
            </h1>
            <input
                value={text}
                onChange={event => {
                    setText(event.target.value);
                }}
                onFocus={() => timerFunc()}
                onBlur={() => clearInterval(intervalRef.current)}
            />
        </div>
    );
};

export default SpeedTest;
