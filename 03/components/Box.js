// ./src/components/Box.js
import React from 'react';
import Div from './Div';
import { TextContext } from '../context';

const Box = () => {
    const text = 'sibling';

    return (
        <TextContext.Provider value = {text}>
            <Div />
        </TextContext.Provider>
    );
};

export default Box;
