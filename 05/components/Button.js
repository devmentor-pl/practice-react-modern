import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Button({ children, type = 'button', onClick, style, hoverStyle }) {
    const [isHover, setIsHover] = useState(false);

    const buttonHoverStyle = {
        opacity: 0.75,
        ...hoverStyle,
    };

    const buttonStyle = {
        fontFamily: 'inherit',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        padding: '.75rem 1.5rem',
        borderRadius: '4px',
        border: 'none',
        opacity: 1,
        boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'all 0.2s ease-out',

        width: '100%',
        ...style,
    };

    return (
        <button
            type={type}
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{ ...buttonStyle, ...(isHover && buttonHoverStyle) }}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
    hoverStyle: PropTypes.objectOf(PropTypes.string),
};

export default Button;
