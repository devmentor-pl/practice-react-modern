import React, {useState, useEffect, useRef} from 'react';
import {v4 as uuid} from 'uuid';
import useRandomItem from './hook';

const speedDataWords = [];

const SpeedTest = () => {

    const [word, regenerateWord] = useRandomItem([
        'devmentor.pl', 
        'abc', 
        'JavaScript', 
        'Ostrowiec Świętokrzyski', 
        'Ełk', 
        'Szczebrzeszyn',
        'szczebrzeszynianka',
        'gdańszczanka',
        'Ixtacamaxtitlan'
    ]);

    const [counter, setCounter] = useState(0);
    const intervalRef = useRef(null);
    const [text, setText] = useState('');

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCounter(value => value + 1);
        }, 1000);
    }

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    }

    const handleChange = (e) => {
        const {value} = e.target;
        setText(value);
    }

    useEffect(() => {
        regenerateWord();
    }, []);

    useEffect(() => {
        if (word === text) {
            const index = speedDataWords.length + 1;
            const data = {index, word, counter};
            speedDataWords.push(data);
            setCounter(0);
            regenerateWord();
            setText('');
        }
    }, [text]);

    const listOnPage = () => {
        const dataLi = speedDataWords.map(item => {
            return <li key={uuid()} style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '5%', textAlign: 'right'}}>[{item.index}]</div>
                <div style={{width: '5%'}}> </div>
                <div style={{width: '30%'}}>{item.word}</div>
                <div style={{width: '10%', textAlign: 'right'}}>{item.counter}</div>
            </li>
        });
        return dataLi;
    }

    return (
        <div>
            <h2>Wpisz w input słowo na żółtym tle</h2>
            <h1 style={{backgroundColor: 'yellow'}}>{word}</h1>
            <input
                name='text'
                value={text}
                onFocus={() => startInterval()} // po kliku w input odliczaj czas
                onBlur={() => stopInterval()} // po kliku poza inputem przestań odliczać czas
                onChange={handleChange}/>
            <h1 style={{backgroundColor: 'yellowgreen'}}>{counter}</h1>
            <ul style={{backgroundColor: 'lightblue'}}>{listOnPage()}</ul>
        </div>
    );
};

export default SpeedTest;
