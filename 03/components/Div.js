// ./src/components/Div.js
import React from 'react';
import PropTypes from 'prop-types';
import { TextContext, ColorContext } from '../context';

const Div = props => {
    const { title } = props;
    const { Consumer: TextConsumer } = TextContext;
    const { Consumer: ColorConsumer } = ColorContext;

    return (
        <ColorConsumer>
            {color => (
                <div style={{ border: `1px solid ${color}` }}>
                    <h1>{title}</h1>
                    <TextConsumer>{text => <p>{text}</p>}</TextConsumer>
                </div>
            )}
        </ColorConsumer>
    );
};

Div.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Div;
