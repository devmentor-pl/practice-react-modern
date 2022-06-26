// ./src/components/App.js
import React from 'react';
import Box from './Box';
import Div from './Div';
import { TextContext, ColorContext } from '../contexts/index';

function App() {
    return (
        <ColorContext.Provider value = 'red'> 
            <section>
                <Box />
                <TextContext.Provider value = 'sibling'>
                    <Div />
                </TextContext.Provider>
            </section>
        </ColorContext.Provider>

    );
}

export default App;
