// ./src/components/Box.js
import React from 'react';
import PropTypes from 'prop-types';
import Div from './Div';

const Box = () => {
    return <Div />;
};

Box.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Box;
