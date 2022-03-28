/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript', 'ScreamingFrog']);
    // word - wylosowane słowo
    // regenerateWord - f-cja losujaca kolejne slowo

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
