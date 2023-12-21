import React, { useReducer, useEffect } from 'react';
import '../styles/styles.css';
import RenderForm from './RenderForm';
import { validateFormFields } from '../utilis/ValidateForm';
import handleEmailSubmission from '../services/EmailService';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
    successMessage: null,
    errors: {},
};

const formReducer = (state, { type, field, value }) => {
    if (type === 'UPDATE_FIELD') {
        return { ...state, [field]: value };
    }

    if (type === 'SUBMIT_FORM') {
        return { ...state, errors: validateFormFields(state) };
    }

    if (type === 'RESET_FORM') {
        return { ...initialState, errors: {} };
    }

    return state;
};

const ContactForm = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    useEffect(() => {
        if (state.successMessage) {
            const timerId = setTimeout(() => {
                dispatch({
                    type: 'UPDATE_FIELD',
                    field: 'successMessage',
                    value: null,
                });
            }, 5000);

            return () => clearTimeout(timerId);
        }

        return undefined;
    }, [state.successMessage]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedState = { ...state, [name]: value };
        const errors = validateFormFields(updatedState);

        dispatch({
            type: 'UPDATE_FIELD',
            field: name,
            value,
        });

        dispatch({
            type: 'UPDATE_FIELD',
            field: 'errors',
            value: { ...state.errors, ...errors },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateFormFields(state);
        const filteredErrors = Object.values(errors).filter((error) => error !== null);

        if (filteredErrors.length === 0) {
            await handleEmailSubmission(state, dispatch);
        } else {
            dispatch({
                type: 'UPDATE_FIELD',
                field: 'errors',
                value: errors,
            });
        }
    };
    return (
        <RenderForm
            state={state}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default ContactForm;
