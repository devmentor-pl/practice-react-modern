import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from '../context/FormContext';

function Input({ name, id, type = 'text' }) {
    const inputStyle = {
        fontFamily: 'inherit',
        fontSize: '1rem',
        padding: '0.25rem',
        maxWidth: '15rem',
        border: '1px solid #086ca2',
        width: '100%',
    };

    const errorStyle = {
        color: 'red',
        margin: 0,
        padding: 0,
        height: '1rem',
        fontSize: '0.85rem',
    };

    const {
        onInputChange,
        state: { formFields },
    } = useForm();

    if (type === 'textarea') {
        return (
            <>
                <textarea
                    style={{ ...inputStyle, maxWidth: '30rem', padding: '0.5rem' }}
                    rows={5}
                    id={id}
                    name={name}
                    onChange={onInputChange}
                    value={formFields[name].value}
                />
                <p style={errorStyle}>{formFields[name].error}</p>
            </>
        );
    }
    return (
        <>
            <input
                style={inputStyle}
                name={name}
                id={id}
                type={type}
                onChange={onInputChange}
                value={formFields[name].value}
            />
            <p style={errorStyle}> {formFields[name].error}</p>
        </>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'number', 'textarea']),
};

export default Input;
