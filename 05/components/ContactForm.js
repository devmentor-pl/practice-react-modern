import React, { useReducer } from 'react';
import formFields from '../formFields';
import Input from './Input';
import Validator from '../utils/Validator';
// import account from './account';
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
/* eslint-disable indent */

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
        const values = Object.values(state);
        const names = Object.keys(state);
        for (let i = 0; i < names.length; i++) {
            if (names[i] === 'errors') {
                return null;
            }
            return validator.validate(names[i], values[i]);
            // console.log('🚀 ~ validateData ~ err', err);
            // eRRORES.push(err);
        }
        // console.log(eRRORES);
        // if (eRRORES.length !== 0) {
        //     dispatch({ type: 'errors', payload: eRRORES });
        // }
    };

    const handleSubmit = form => {
        form.preventDefault();
        const error = validateData();
        console.log('🚀 ~ ContactForm ~ error', error);
        errors.push(error);
        // validate data

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
