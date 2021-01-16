// ./src/components/Div.js
import React from 'react';
import { TextContext, ColorContext } from '../context';

const Div = () => {
    const { Consumer: TextConsumer } = TextContext;
    const { Consumer: ColorConsumer } = ColorContext;

    return (
        <TextConsumer>
            {text => <ColorConsumer>{color => <div style={{ color }}>{text}</div>}</ColorConsumer>}
        </TextConsumer>
    );
};

export default Div;
