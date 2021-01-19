import React from 'react';
import PropTypes from 'prop-types';

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

Input.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default Input;
