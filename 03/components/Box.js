// ./src/components/Box.js
import React from 'react';
import Div from './Div';
import { TextContext } from '../context';

const Box = () => {
    const { Provider } = TextContext;

    return (
        <Provider value="sibling">
            <Div/>
        </Provider>
    )
};

export default Box;
