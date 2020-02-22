// ./src/components/Box.js
import React from 'react';
import PropTypes from 'prop-types';
import Div from './Div';
import { TextContext, ColorContext } from '../context';

const Box = () => {
    const { Consumer: TextConsumer } = TextContext;
    const { Consumer: ColorConsumer } = ColorContext;
    return (
        <TextConsumer>
            {text => <ColorConsumer>{color => <Div title={text} color />}</ColorConsumer>}
        </TextConsumer>
    );
};

Box.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Box;
