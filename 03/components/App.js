// ./src/components/App.js
import React, { useContext } from 'react';
import Box from './Box';
import Div from './Div';
import { ColorContext, TextContext } from '../context';

function App() {
    const { Provider: ColorProvider } = ColorContext;
    const { Provider: TextProvider } = TextContext;

    const defaultValue = useContext(ColorContext);

    return (
        <section>
            <Box />
            <ColorProvider value={defaultValue}>
                <TextProvider value="sibling">
                    <Div />
                </TextProvider>
            </ColorProvider>
        </section>
    );
}

export default App;
