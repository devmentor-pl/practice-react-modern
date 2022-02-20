// ./src/components/App.js
import React, { useContext } from 'react';
import Box from './Box';
import Div from './Div';
import { TextContext } from '../context';

function App() {
    const nestedText = useContext(TextContext);

    return (
        <section>
            <TextContext.Provider value={nestedText}>
                <Box />
            </TextContext.Provider>
            <TextContext.Provider value="sibling">
                <Div />
            </TextContext.Provider>
        </section>
    );
}

export default App;
