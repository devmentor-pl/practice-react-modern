import React, { useReducer, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import fields from './Fields';
import acc from './account';

function ContactForm() {
    const init = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
    };
    const form = useRef();
    const reducer = (state, { name, value }) => ({ ...state, [name]: value });
    const [state, dispatch] = useReducer(reducer, init);
    const [errors, setErrors] = useState('');
    const styleForm = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
    const styleLabel = {
        margin: '5px',
    };
    const checkValidation = (e) => {
        e.preventDefault();
        // eslint-disable-next-line prefer-const
        let wrongValues = [];
        // eslint-disable-next-line object-curly-newline
        fields.forEach(({ name, isRequired, pattern, error }) => {
            const value = state[name];
            if (isRequired) {
                if (!pattern.test(value)) {
                    wrongValues.push(error);
                    setErrors(wrongValues);
                }
            }
        });
        if (wrongValues.length === 0) {
            // eslint-disable-next-line no-console
            console.log('Form is OK');
            setErrors(...wrongValues);
            emailjs
                .sendForm(`${acc.serviceId}`, `${acc.temaplteId}`, form.current, `${acc.publicKey}`)
                .then(
                    (result) => {
                        // eslint-disable-next-line no-console
                        console.log(result, 'Succes');
                    },
                    (error) => {
                        // eslint-disable-next-line no-console
                        console.log(error.text, 'smth went wrong');
                    },
                );
        }
    };

    return (
        <form ref={form} style={styleForm} onSubmit={checkValidation}>
            {fields.map(({ name, type, label }) => {
                if (type === 'textarea') {
                    return (
                        // eslint-disable-next-line jsx-a11y/label-has-associated-control
                        <label style={styleLabel} key={name}>
                            {label}
                            <textarea
                                onChange={(e) => dispatch(e.target)}
                                name={name}
                                value={state[name]}
                                type={type}
                            />
                        </label>
                    );
                }
                return (
                    // eslint-disable-next-line jsx-a11y/label-has-associated-control
                    <label style={styleLabel} key={name}>
                        {label}
                        <input
                            onChange={(e) => dispatch(e.target)}
                            name={name}
                            value={state[name]}
                            type={type}
                        />
                    </label>
                );
            })}
            <div>{errors}</div>
            <input type="submit" value="Send" />
        </form>
    );
}
export default ContactForm;
