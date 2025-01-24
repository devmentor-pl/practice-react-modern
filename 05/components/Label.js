import React from 'react';
import PropTypes from 'prop-types';

function Label({ children, htmlFor }) {
    const labelStyle = {
        textTransform: 'uppercase',
        fontSize: '0.85rem',
        fontWeight: 'bold',
        color: '#1C3464',
        letterSpacing: '1px',
    };

    return (
        <label style={labelStyle} htmlFor={htmlFor}>
            {children}
        </label>
    );
}

export default Label;

Label.propTypes = {
    children: PropTypes.node,
    htmlFor: PropTypes.string.isRequired,
};
