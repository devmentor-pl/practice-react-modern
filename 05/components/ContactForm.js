/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
/* eslint-disable indent */

import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import Input from './Input';
import Validator from '../utils/Validator';
import formFields from '../formFields';
// import account from './account';

const ContactForm = () => {
    const init = {
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        topic: '',
        message: '',
        errors: [],
    };

    // eslint-disable-next-line consistent-return
    const reducer = (state, action) => {
        const newState = { ...state };

        switch (action.type) {
            case 'clear':
                return action.payload;
            case 'errors':
                newState.errors = action.payload;
                return newState;
            case action.type:
                newState[action.type] = action.payload;
                return newState;
        }
    };

    const [state, dispatch] = useReducer(reducer, init);

    const validateData = () => {
        const validator = new Validator();
        return validator.validate(state);
    };

    const clearForm = () => dispatch({ type: 'clear', payload: init });
    const sendErrors = errors => dispatch({ type: 'errors', payload: errors });

    const displayErrors = () => {
        const errorItem = { color: 'red' };
        const errorItems = state.errors.map(err => {
            return (
                <li key={uuid()} style={errorItem}>
                    {err}
                </li>
            );
        });
        return (
            <>
                <h3>Fields you need to fix: </h3>
                <ul>{errorItems}</ul>
            </>
        );
    };

    const saveData = () => {
        console.log('your message has been successfully submitted');
    };

    const handleSubmit = form => {
        form.preventDefault();
        const errors = validateData();

        if (errors.length > 0) {
            sendErrors(errors);
        } else {
            saveData();
            clearForm();
        }
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
            {state.errors ? displayErrors() : null}
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
