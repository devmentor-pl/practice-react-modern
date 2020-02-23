// ./src/components/Box.js
import React from 'react';
import PropTypes from 'prop-types';
import Div from './Div';
import { TextContext } from '../context';

const Box = () => {
    const { Provider } = TextContext;
    return (
        <Provider value="sibling">
            <Div />
        </Provider>
    );
};

Box.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Box;
