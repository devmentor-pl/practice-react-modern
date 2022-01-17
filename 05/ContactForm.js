import React, { useReducer, useState } from 'react';
import { getNameRegex, getEmailRegex, getPhoneRegex } from './tools/validationHelper';
import ContactFormValidation from './ContactFormValidation';
// import account from './account/account';

function ContactForm() {
    // console.log(account);
    const validation = new ContactFormValidation();

    const init = {
        userName: '',
        userEmail: '',
        userPhone: '',
        userSubject: '',
        userMessage: '',
    };
    const errors = {};
    let errorsCount = 0;

    const fields = [
        {
            name: 'userName',
            type: 'text',
            placeholder: 'Your name',
            validationRules: { isRequired: true, regex: getNameRegex() },
        },
        {
            name: 'userEmail',
            type: 'email',
            placeholder: 'Your email',
            validationRules: { isRequired: true, regex: getEmailRegex() },
        },
        {
            name: 'userPhone',
            type: 'number',
            placeholder: 'Your number',
            validationRules: { isRequired: false, regex: getPhoneRegex() },
        },
        {
            name: 'userSubject',
            type: 'text',
            placeholder: 'Your subject',
            validationRules: { isRequired: true, regex: null },
        },
        {
            name: 'userMessage',
            type: 'textarea',
            placeholder: 'Your message',
            validationRules: { isRequired: true, regex: null },
        },
    ];

    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, init);

    const validateInputs = (e) => {
        fields.forEach((field) => {
            errors[field.name] = [];
        });

        fields.forEach((field) => {
            const value = state[field.name];
            if (field.validationRules.isRequired) {
                if (validation.isEmpty(value)) {
                    errors[field.name].push('Field is require');
                }
                if (field.validationRules.regex) {
                    if (validation.checkDataCorrectness(field.validationRules.regex, value)) {
                        errors[field.name].push('Incorrect format');
                    }
                }
            }
            if (!field.validationRules.isRequired) {
                if (!validation.isEmpty(value)) {
                    if (validation.checkDataCorrectness(field.validationRules.regex, value)) {
                        errors[field.name].push('Incorrect format');
                    }
                }
            }
            errorsCount += errors[field.name].length;
        });

        if (errorsCount > 0) {
            e.preventDefault();
            console.log(errors);
        }
    };
    // const { userName, userEmail, userPhone, userSubject, userMessage } = state;
    console.log(errors);
    return (
        <div>
            <form onSubmit={validateInputs} onChange={(e) => dispatch(e.target)}>
                {fields.map((el) => {
                    return (
                        <div>
                            <input type={el.type} name={el.name} value={el.value} placeholder={el.placeholder} />
                            <span>
                                {errors[el.name] && errors[el.name].length > 0
                                    ? errors[el.name].map((i) => <li>{i}</li>)
                                    : 'Test'}
                            </span>
                        </div>
                    );
                })}
                <input type="submit" />
            </form>
        </div>
    );
}

export default ContactForm;
