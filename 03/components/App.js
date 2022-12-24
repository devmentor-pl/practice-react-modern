// ./src/components/App.js
import React from 'react';
import Box from './Box';
import Div from './Div';
// eslint-disable-next-line no-unused-vars
import { TextContext } from '../context';

function App() {

    return (
        <section>
            <Box />
            <TextContext.Provider value="sibling">
                <Div/>
            </TextContext.Provider>
        </section>
    );
}

export default App;
