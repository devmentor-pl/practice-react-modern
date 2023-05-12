import React, { useReducer, useState } from 'react';
import formFields from '../formFields';
import formValidation from '../formValidation';
// import account from './account';

function ContactForm() {
    const init = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        topic: '',
        message: '',
        textarea: '',
    };

    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const [errors, setErrors] = useState([]);
    const [summary, setSummary] = useState('');
    const [state, dispatch] = useReducer(reducer, init);

    const { firstName, lastName, email, phoneNumber, topic, message, textarea } = state;

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            email,
            phoneNumber,
            topic,
            message,
            textarea,
        };

        const formErrors = formValidation(data, formFields);

        if (formErrors.length === 0) {
            setSummary(`Formularz wypełniony prawidłowo. Potwierdzenie wysłano na email: ${email}`);
            setErrors([]);
        } else {
            setErrors([...formErrors]);
        }
    };

    const fields = formFields.map((field) => {
        if (field.type === 'textarea') {
            return (
                <>
                    <label className="form__label" key={field.name} htmlFor={field.name}>
                        {field.label}
                    </label>
                    <textarea
                        style={{ width: '100%' }}
                        className="form__textarea"
                        name={field.name}
                        onChange={(e) => dispatch(e.target)}
                        value={state[field.name]}
                    />
                </>
            );
        }

        return (
            <>
                <label className="form__label" key={field.name} htmlFor={field.name}>
                    {field.label}
                </label>
                <input
                    style={{ width: '100%' }}
                    className="form__input"
                    name={field.name}
                    onChange={(e) => dispatch(e.target)}
                    value={state[field.name]}
                    type={field.type}
                />
            </>
        );
    });

    const formStyle = {
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    return (
        <>
            <form style={formStyle} noValidate onSubmit={handleSubmit}>
                {fields}
                <input type="submit" />
            </form>
            <ul>
                {errors.map((error) => (
                    <li key={error.name}>{error.message}</li>
                ))}
            </ul>
            <p>{summary}</p>
        </>
    );
}

export default ContactForm;
