// ./src/components/App.js
import React from 'react';
import Box from './Box';
import Div from './Div';
import {ColorContext} from './../context'

const App = () => {
    const {Provider} = ColorContext;
 
    return (
        <Provider >
            <section>
                <Box />
                <Div />
            </section>
        </Provider >
    );
};

export default App;
