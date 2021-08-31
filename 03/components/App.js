// ./src/components/App.js
import React from 'react';
import Box from './Box';
import Div from './Div';

import { TextContext } from '../context';

const App = () => {
    const { Provider: TextProvider } = TextContext;
    return (
        <section>
            <TextProvider value="sibiling">
                <Div />
            </TextProvider>
        </section>
    );
};

export default App;
