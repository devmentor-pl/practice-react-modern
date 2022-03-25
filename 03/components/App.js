// ./src/components/App.js
import React from 'react';
import Box from './Box';
import Div from './Div';
import {TextContext} from '../context';

function App() {
    const header1 = 'siblings';
    return (
        <section>
            <Box />
            <TextContext.Provider value = {header1}>
                <Div  />
            </TextContext.Provider>
        </section>
    );
};

export default App;
