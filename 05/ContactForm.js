import React, { useReducer, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { fields } from './formFieldsData';
import { EMAILJS_KEY, SERVICE_ID, TEMPLATE_ID } from './account';

export { TEMPLATE_ID, SERVICE_ID, EMAILJS_KEY } from './account';

function ContactForm() {
    const init = {
        nameAndSurname: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
    };

    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };
    const [state, dispath] = useReducer(reducer, init);
    const [errors, setErrors] = useState([]);
    const formRef = useRef();

    const Validate = (formFields) => {
        let formErrors = [];
        formFields.forEach((field) => {
            const { name, pattern, label, error, required } = field;
            const fieldValue = state[name];

            if (fieldValue.length === 0 && required) {
                formErrors = formErrors.concat(`Dane w polu ${label} są wymagane!`);
                return;
            }

            if (!fieldValue.match(pattern) && fieldValue) {
                formErrors = formErrors.concat(error);
            }
        });
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const FoundErrors = Validate(fields);
        setErrors(FoundErrors);

        if (FoundErrors.length === 0) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, EMAILJS_KEY).then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
        }
    };

    return (
        <form ref={formRef} noValidate onSubmit={handleSubmit}>
            <ul className="Errors">
                {errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
            </ul>

            {fields.map(({ name, label, type }) => {
                let field;
                if (type !== 'textarea') {
                    field = (
                        <React.Fragment key={label}>
                            <label htmlFor={name}>{label}</label>
                            <input
                                id={name}
                                name={name}
                                value={state[name]}
                                type={type}
                                onChange={(e) => dispath(e.target)}
                            />
                        </React.Fragment>
                    );
                } else {
                    field = (
                        <React.Fragment key={label}>
                            <label htmlFor={name}>{label}</label>
                            <textarea
                                id={name}
                                name={name}
                                value={state[name]}
                                onChange={(e) => dispath(e.target)}
                            />
                        </React.Fragment>
                    );
                }

                return field;
            })}

            <button type="submit">Wyślij</button>
        </form>
    );
}

export default ContactForm;
