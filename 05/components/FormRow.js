import PropTypes from 'prop-types';
import React from 'react';

function FormRow({ children }) {
    const formRowStyle = {
        display: 'grid',
        gap: '0.25rem',
    };

    return <div style={formRowStyle}>{children}</div>;
}

FormRow.propTypes = {
    children: PropTypes.node,
};

export default FormRow;
