// ./src/components/App.js
import React from 'react';
import Box from './Box';
import Div from './Div';
import { ColorContext, TextContext } from './context.js';

const App = () => {
    const { Provider } = TextContext;

    return (
        <section>
            <Provider value="sibling">
                <Box />
            </Provider>
            <Div />
        </section>
    );
};

export default App;
