import React, { useReducer, useState } from 'react';
import formFields from '../formFields';
import formValidation from '../formValidation';
import sendEmail from '../sendEmail';

function ContactForm() {
    const init = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        topic: '',
        message: '',
    };

    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const [errors, setErrors] = useState([]);
    const [summary, setSummary] = useState('');
    const [state, dispatch] = useReducer(reducer, init);

    const { firstName, lastName, email, phoneNumber, topic, message } = state;

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            email,
            phoneNumber,
            topic,
            message,
        };

        const formErrors = formValidation(data, formFields);

        if (formErrors.length === 0) {
            setErrors([]);
            sendEmail({
                full_name: `${firstName} ${lastName}`,
                topic,
                message,
                email,
            });
            setSummary(`Formularz wypełniony prawidłowo. Wiadomość wysłana!`);
        } else {
            setErrors([...formErrors]);
        }
    };

    const fields = formFields.map((field) => {
        const { tagName = 'input' } = field;
        const Field = tagName;

        return (
            <label
                style={{ width: '100%' }}
                key={field.name}
                className="form__label"
                htmlFor={field.name}
            >
                {field.label}
                <Field
                    style={{ width: '100%' }}
                    className="form__textarea"
                    name={field.name}
                    onChange={(e) => dispatch(e.target)}
                    value={state[field.name]}
                />
            </label>
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
