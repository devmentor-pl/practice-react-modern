// ./src/components/Box.js
import React from 'react';
import Div from './Div';
import { TextContext } from '../context';

function Box() {
    const { Provider } = TextContext;
    return (
        <Provider value='nested'>
            <Div />
        </Provider>
    ); 
}

export default Box;
