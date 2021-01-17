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
        newState[action.name] = action.value;
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
        console.log('validation process...');
        console.log(data);
        const validator = new Validator();
        const { firstName, lastName, email, tel, topic, message } = data;
        const x = validator.isFirstNameValid(firstName);
        const y = validator.isLastNameValid(lastName);
        console.log(x, y);

        // if all is good, return true
    };

    const handleSubmit = form => {
        form.preventDefault();

        // validate data
        if (validateData(state)) {
            // confirm that you received
            // save form to database (where?)
            // zero the form
        } else {
            // add error or display errors
        }
    };

    const renderFields = () => {
        return Object.keys(formFields).map(field => {
            const { type, name, placeholder } = formFields[field];
            return (
                <Input
                    action={e => dispatch(e.target)}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={state[name]}
                    key={name}
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
