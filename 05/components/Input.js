/* eslint react/prop-types: 0 */
import React from 'react';

const Input = props => {
    const { value, placeholder, type, id, name, dispatch } = props;

    return (
        <label htmlFor={id}>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={e => dispatch({ type: name, payload: e.target.value })}
            />
        </label>
    );
};

export default Input;
