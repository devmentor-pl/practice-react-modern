import React, { useEffect, useState } from 'react';
import useRandomItem from './hook';
import UserPreferences from './UserPreferences';
import useTimer from './useTimer';

function SpeedTest() {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [userWord, setUserWord] = useState('');
    const [wordLength, setWordLength] = useState(0);

    const [isFocused, setIsFocused] = useState(false);
    const [isRoundActive, setIsRoundActive] = useState(false);
    const [roundTime, setRoundTime] = useState(0);

    useEffect(() => {
        regenerateWord();
    }, []);

    const roundTimer = useTimer({
        isRunning: isRoundActive && isFocused,
        initialTime: roundTime * 60,
        mode: 'down',
    });

    const freeTimer = useTimer({
        isRunning: !isRoundActive && isFocused,
        initialTime: 0,
        mode: 'up',
    });

    useEffect(() => {
        if (!word) return;

        if (userWord === word) {
            setWordLength((value) => value + userWord.length);
            regenerateWord();
            setUserWord('');
        }
    }, [userWord, word]);

    useEffect(() => {
        roundTimer.reset(roundTime * 60);
    }, [roundTime]);

    const isCorrect = userWord === '' || word.startsWith(userWord);

    const handleFocus = () => {
        setIsFocused(true);

        if (roundTime > 0) {
            setIsRoundActive(true);
        }
    };

    const handleBlur = () => setIsFocused(false);

    const handleChange = (e) => {
        setUserWord(e.target.value);
    };

    const handleReset = () => {
        setUserWord('');
        setWordLength(0);
        setIsFocused(false);
        setIsRoundActive(false);
        setRoundTime(0);

        roundTimer.reset(0);
        freeTimer.reset(0);
    };

    return (
        <div>
            <h1>{word}</h1>

            <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={userWord}
                onChange={handleChange}
                disabled={isRoundActive && roundTimer.time === 0}
                style={{ color: isCorrect ? 'black' : 'red' }}
            />

            <p>Twój czas: {isRoundActive ? roundTimer.time : freeTimer.time}s</p>
            <p>Twój najdłuższy ciąg poprawnie wpisanych znaków: {wordLength}</p>

            <button type="button" onClick={handleReset}>
                Resetuj wynik
            </button>

            <UserPreferences
                roundTime={roundTime}
                setRoundTime={setRoundTime}
                setIsRoundActive={setIsRoundActive}
            />
        </div>
    );
}

export default SpeedTest;
