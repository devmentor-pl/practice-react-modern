import React, { useReducer, useState } from 'react';

const ContactForm = function () {
    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const initialState = { names: '', email: '', message: '', subject: '' };
    const [state, dispatch] = useReducer(reducer, initialState);
    const { names, email, message, subject } = state;
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const errorsList = [];
        setErrors([]);

        if (names.length === 0) {
            errorsList.push('Name is required');
        }

        if (!email.includes('@')) {
            errorsList.push('Email is required');
        }

        if (message.length === 0) {
            errorsList.push('Message is required');
        }

        if (subject.length === 0) {
            errorsList.push('Subject is required');
        }

        if (errorsList.length > 0) {
            setErrors(errorsList);
        } else {
            setSuccess(true);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form__box">
                    <label htmlFor="names">
                        Names:
                        <input
                            type="text"
                            name="names"
                            value={names}
                            onChange={(e) => dispatch(e.target)}
                        />
                    </label>
                </div>

                <div className="form__box">
                    <label htmlFor="email">
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => dispatch(e.target)}
                        />
                    </label>
                </div>

                <div className="form__box">
                    <label htmlFor="subject">
                        Subject:
                        <input
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={(e) => dispatch(e.target)}
                        />
                    </label>
                </div>

                <div className="form__box">
                    <label htmlFor="message">
                        Message:
                        <input
                            type="textarea"
                            name="message"
                            value={message}
                            onChange={(e) => dispatch(e.target)}
                        />
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>

            <ul>
                {errors.map((err) => (
                    <li>{err}</li>
                ))}
            </ul>
            <p className="sucess">{success ? 'Success' : null}</p>
        </>
    );
};

export default ContactForm;
