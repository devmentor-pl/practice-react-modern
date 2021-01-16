// ./src/components/Div.js
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ColorContext, TextContext } from '../context';

const Div = props => {
    const { title } = props;
    const borderColorConsumer = useContext(ColorContext);
    const textConsumer = useContext(TextContext);

    const style = { border: `1px solid ${borderColorConsumer} ` };
    return (
        <div style={style}>
            <h1>{title}</h1>
            <p>{textConsumer}</p>
        </div>
    );
};

Div.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Div;
