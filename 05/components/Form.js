import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useForm } from '../context/FormContext';

function Form({ children }) {
    const formStyle = {
        fontFamily: 'cursive',
        padding: '3rem',
        border: '2px solid #086ca2',
        borderRadius: '40px',
        boxShadow: '1px 1px 10px rgba(0,0,0, 0.1)',
        maxWidth: '25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    };

    const {
        clearForm,
        validateForm,
        state: { isFormValid },
    } = useForm();

    useEffect(() => {
        if (isFormValid) {
            console.log('Success!');
            clearForm();
        }
    }, [isFormValid]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        validateForm();
    };

    return (
        <form style={formStyle} onSubmit={handleOnSubmit} noValidate>
            {children}
        </form>
    );
}

Form.propTypes = {
    children: PropTypes.node,
};

export default Form;
