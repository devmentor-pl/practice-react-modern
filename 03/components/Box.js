// ./src/components/Box.js
import React, { useContext } from 'react';
import Div from './Div';
import { ColorContext, TextContext } from '../context';

function Box() {
    const { Provider: ColorProvider } = ColorContext;
    const { Provider: TextProvider } = TextContext;

    const defaultColor = useContext(ColorContext);
    const defaultText = useContext(TextContext);

    return (
        <ColorProvider value={defaultColor}>
            <TextProvider value={defaultText}>
                <Div />
            </TextProvider>
        </ColorProvider>
    );
}

export default Box;
