import React, { useReducer, useState, useEffect } from 'react';
import validateForm from './validateForm';

const ContactForm = () => {
    const init = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
        isSubmited: false,
    };
    const reducer = (state, { name, value }) => {
        return { ...state, [name]: value };
    };
    const [state, dispatch] = useReducer(reducer, init);
    const { firstName, lastName, email, phoneNumber, subject, message } = state;
    const [errors, setErrors] = useState({});
    const [isSubmited, setIsSubmited] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateForm(state));
        setIsSubmited(true);
    };
    const handleChange = e => {
        dispatch(e.target);
    };

    const submit = () => {
        console.log('Submited !! ');
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmited) {
            submit();
        }
    }, [errors]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">
                        First name
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            value={firstName}
                        />
                        <span className="erros">{errors.firstNameErr && errors.firstNameErr}</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="lastName">
                        Last Name
                        <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={lastName}
                        />
                        <span className="erros">{errors.lastNameErr && errors.lastNameErr}</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email Address
                        <input
                            id="email"
                            type="text"
                            name="email"
                            onChange={handleChange}
                            value={email}
                        />
                        <span className="erros">{errors.emailErr && errors.emailErr}</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="phoneNumber">
                        Phone Number
                        <input
                            id="phoneNumber"
                            type="text"
                            name="phoneNumber"
                            onChange={handleChange}
                            value={phoneNumber}
                        />
                        <span className="erros">
                            {errors.phoneNumberErr && errors.phoneNumberErr}
                        </span>
                    </label>
                </div>
                <div>
                    <label htmlFor="subject">
                        Subject
                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            onChange={handleChange}
                            value={subject}
                        />
                        <span className="erros">{errors.subjectErr && errors.subjectErr}</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="message">
                        message
                        <input
                            id="message"
                            type="text"
                            name="message"
                            onChange={handleChange}
                            value={message}
                        />
                        <span className="erros">{errors.messageErr && errors.messageErr}</span>
                    </label>
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <script src="https://smtpjs.com/v3/smtp.js"></script>
        </div>
    );
};

export default ContactForm;
