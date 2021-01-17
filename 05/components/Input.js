/* eslint react/prop-types: 0 */
import React from 'react';

const Input = props => {
    const { value, placeholder, type, name, id, action } = props;

    return (
        <label htmlFor={id}>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={action}
            />
        </label>
    );
};

export default Input;
