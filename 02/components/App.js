// ./src/components/App.js
import React from 'react';
import Box from './Box';
import { TextContext } from '../context/TextContext';

function App() {
    const { Provider } = TextContext;

    return (
        <Provider value="React HelloWorld Modern!">
            <Box />
        </Provider>
    );
}

export default App;
