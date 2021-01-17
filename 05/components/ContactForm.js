import React, { useReducer } from 'react';
import formFields from '../formFields';
import Input from './Input';
import Validator from '../utils/Validator';
// import account from './account';
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const ContactForm = () => {
    const reducer = (state, action) => {
        const newState = { ...state };
        newState[action.type] = action.payload;
        console.log('🚀 ~ reducer ~ newState', newState);
        return newState;
    };

    const init = {
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        topic: '',
        message: '',
        errors: [],
    };

    const [state, dispatch] = useReducer(reducer, init);

    const validateData = data => {
        const validator = new Validator();

        Object.keys(data).map(field => {
            const result = validator[`is${field}Valid`](field, formFields[field].validationRules);
            console.log(result);
            // if (field === formFields.field) {
            //     console.log('yeeey');
            // } else {
            //     console.log('naiii');
            // }
        });
        // if all is good, return true
    };

    const handleSubmit = form => {
        form.preventDefault();

        // validate data
        if (validateData(state)) {
            // confirm that you received
            // save form to database (where?)
            // zero the form
            return true;
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
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
