/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
/* eslint-disable indent */

import React, { useReducer } from 'react';
import formFields from '../formFields';
import Input from './Input';
import Validator from '../utils/Validator';
// import account from './account';

const ContactForm = () => {
    const init = {
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        topic: '',
        message: '',
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case action.type:
                const newState = { ...state };
                newState[action.type] = action.payload;
                return newState;
            case 'errors':
                return [...state[type], action.payload];
        }
    };

    const [state, dispatch] = useReducer(reducer, init);

    const validateData = () => {
        const validator = new Validator();
        return validator.validate(state);
    };

    const handleSubmit = form => {
        form.preventDefault();
        const errors = validateData();
        console.log('🚀 CONTACT errors', errors);
        dispatch({ type: 'errors', payload: errors });

        // clear the form
    };

    const renderFields = () => {
        return Object.keys(formFields).map(field => {
            const { type, name, placeholder } = formFields[field];
            return (
                <Input
                    dispatch={dispatch}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={state[name]}
                    key={name}
                    id={name}
                />
            );
        });
    };

    return (
        <form noValidate onSubmit={handleSubmit} name="form">
            {renderFields()}
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
