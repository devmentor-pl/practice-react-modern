import React, { useReducer, useState } from 'react';
import DataValidator from './DataValidator';

import account from './account';

const ContactForm = () => {
    const init = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    };

    const validationRules = {
        name: [
            {
                rule: 'required',
                errorMessage: 'Please enter a name',
            },
        ],
        email: [
            {
                rule: 'required',
                errorMessage: 'Please enter an email address',
            },
            {
                rule: 'email',
                errorMessage: 'Please enter a valid email address',
            },
        ],
        phone: [
            {
                rule: 'phone',
                errorMessage: 'Please enter a valid phone number',
            },
        ],
        subject: [
            {
                rule: 'required',
                errorMessage: 'Please enter a subject',
            },
        ],
        message: [
            {
                rule: 'required',
                errorMessage: 'Please enter a message',
            },
        ],
    };

    const reducer = (state, { name, value }) => {
        return { ...state, [name]: value };
    };

    const [state, dispatch] = useReducer(reducer, init);
    const [errors, setErrors] = useState([]);
    const { name, email, phone, subject, message } = state;

    const resetData = () => {};

    const validateData = data => {
        return new DataValidator(validationRules, data).validate();
    };

    const sendEmail = () => {
        window.Email.send({
            SecureToken: account.token,
            To: account.username,
            From: email,
            Subject: subject,
            Body: message,
        }).then(response => console.log(response));
    };

    const handleSubmitForm = e => {
        e.preventDefault();

        setErrors([]);

        const validationErrors = validateData(state);

        setErrors(validationErrors);

        if (errors.length === 0) {
            sendEmail();
            resetData();
        }
    };

    return (
        <form onSubmit={e => handleSubmitForm(e)}>
            {errors.length > 0 && (
                <ul>
                    {errors.map(error => {
                        return <li key={error}>{error}</li>;
                    })}
                </ul>
            )}
            <div>
                <label htmlFor="name">
                    Name
                    <input id="name" name="name" value={name} onChange={e => dispatch(e.target)} />
                </label>
            </div>
            <div>
                <label htmlFor="email">
                    Email
                    <input name="email" value={email} onChange={e => dispatch(e.target)} />
                </label>
            </div>
            <div>
                <label htmlFor="phone">
                    Phone
                    <input name="phone" value={phone} onChange={e => dispatch(e.target)} />
                </label>
            </div>
            <div>
                <label htmlFor="subject">
                    Subject
                    <input name="subject" value={subject} onChange={e => dispatch(e.target)} />
                </label>
            </div>
            <div>
                <label htmlFor="message">
                    Message
                    <textarea name="message" value={message} onChange={e => dispatch(e.target)} />
                </label>
            </div>
            <div>
                <input type="submit" value="Send" />
            </div>
        </form>
    );
};

export default ContactForm;
