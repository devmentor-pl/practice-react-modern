/* eslint-disable */

import React, { useReducer, useRef } from 'react';

const ContactForm = () => {
    const form = useRef();

    const initFields = [
        {
            name: 'firstName',
            label: 'Imię',
            required: true,
            pattern: '^[a-zA-Z –-]+$',
        },
        {
            name: 'email',
            label: 'Email',
            required: true,
            pattern: '^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\\.[a-zA-Z]{2,4}$',
        },
        {
            name: 'phone',
            type: 'number',
            label: 'Numer Telefonu',
            required: false,
            pattern: '^[0-9]{9}$',
        },
        {
            name: 'subject',
            label: 'Temat wiadomości',
            required: true,
        },
        {
            name: 'textArea',
            label: 'Wiadomość',
            required: true,
        },
    ];

    const emptyFields = {
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        textArea: '',
        errors: {
            firstName: '',
            email: '',
            phone: '',
            subject: '',
            textArea: '',
        },
    };

    const validateField = (name, value) => {
        const field = initFields.find((field) => field.name === name);
        const errors = { ...emptyFields.errors };

        if (!field) {
            return errors;
        }

        const { label, required, pattern } = field;

        if (required && value.trim() === '') {
            errors[name] = `Pole ${label} jest wymagane.`;
        }
        if (pattern && value.trim() !== '') {
            const reg = new RegExp(pattern);
            if (!reg.test(value)) {
                errors[name] = `Dane w polu ${label} są niepoprawne.`;
            }
        }

        return errors;
    };

    const reducer = (state, { name, value, action = 'change' }) => {
        switch (action) {
            case 'change': {
                const newState = { ...state, [name]: value };
                return { ...newState, errors: validateField(name, value) };
            }
            case 'reset': {
                return emptyFields;
            }
            default: {
                return state;
            }
        }
    };

    const [state, dispatch] = useReducer(reducer, emptyFields);
    const { firstName, email, errors, phone, mainError, subject, textArea } = state;

    const submit = (e) => {
        e.preventDefault();
        const updatedErrors = { ...emptyFields.errors };

        for (const field of initFields) {
            const fieldErrors = validateField(field.name, state[field.name]);
            updatedErrors[field.name] = fieldErrors[field.name];
        }

        if (Object.values(updatedErrors).every((error) => error === '')) {
            dispatch({ action: 'reset' });
        } else {
            dispatch({
                name: 'mainError',
                value: 'Upewnij się, że wszystkie wymagane pola są wypełnione.',
            });
        }
    };

    return (
        <form ref={form} noValidate onSubmit={submit}>
            {initFields.map((field) => (
                <div key={field.name}>
                    <label htmlFor={field.name}>
                        {field.label}:
                        {field.name === 'textArea' ? (
                            <textarea
                                type="text"
                                id={field.name}
                                name={field.name}
                                required={field.required}
                                value={state[field.name]}
                                onChange={(e) =>
                                    dispatch({ name: field.name, value: e.target.value })
                                }
                            />
                        ) : (
                            <input
                                id={field.name}
                                name={field.name}
                                type={field.type}
                                required={field.required}
                                value={state[field.name]}
                                onChange={(e) =>
                                    dispatch({ name: field.name, value: e.target.value })
                                }
                            />
                        )}
                    </label>
                    {state.errors[field.name] && (
                        <p style={{ color: 'red' }}>{state.errors[field.name]}</p>
                    )}
                </div>
            ))}
            {mainError && <p style={{ color: 'red' }}>{mainError}</p>}
            <input type="submit" />
        </form>
    );
};

export default ContactForm;
