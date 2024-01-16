import React, { useEffect } from 'react';
import useRandomItem from './hook';

function SpeedTest() {
        const [word, regenerateWord] = useRandomItem([
            'abc',
            'JavaScript',
            'devmentor.pl',
            'papaja',
            'dom',
            'rododendron',
            'klawiatura',
        ]);
    
        const [text, setIsText] = React.useState('');
        const [counter, setIsCounter] = React.useState(0);
    
        const ref = useRef(null);
    
        const stopInterval = () => {
            clearInterval(ref.current);
        };

        const startGame = () => {
            intervalRef.current = setInterval(() => {
                updateTime((timeElapsed) => Number(timeElapsed) + 1);
            }, 1000);
        };
    
        const stopGame = () => {
            clearInterval(intervalRef.current);
        };
    
        const resetGame = () => {
            updateInput('');
            updateTime(0);
            setPoints(0);
            stopGame();
        };
    
        useEffect(() => {
            if (time === roundTime) stopGame();
        }, [time]);

    useEffect(() => {
        regenerateWord();
    }, []);

    return (
        <div>
            <h1>{word}</h1>
            <input />
        </div>
    );
};

export default SpeedTest;
