// ./src/components/App.js
import React from 'react';
import Box from './Box';
import Div from './Div';

import { TextContext, ColorContext } from '../context';

const App = () => {
    const {Provider: TextProvider} = TextContext;
    const {Provider: ColorProvider} = ColorContext;
    return (
        <section>
            <Box/>
            <TextProvider value='sibling'>
                <ColorProvider value='red'>
                    <Div /> 
                </ColorProvider>
            </TextProvider>
        </section>
    );
};

export default App;
