import React, { useRef, useReducer } from 'react';
import emailjs from '@emailjs/browser';
import { serviceID, templateID, userID } from './account';

// import account from './account';

function ContactForm() {
    const form = useRef();

    const init = { userName: '', userEmail: '', phoneNumber: '', subject: '', message: '' };

    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, init);
    const { userName, userEmail, phoneNumber, subject, message } = state;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, e.target, userID).then(
            (result) => {
                // eslint-disable-next-line no-console
                console.log(result.text);
            },
            (error) => {
                // eslint-disable-next-line no-console
                console.log(error.text);
            },
        );
        // eslint-disable-next-line no-console
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input
                type="text"
                name="userName"
                placeholder="name"
                value={userName}
                onChange={(e) => dispatch(e.target)}
                required
            />
            <input
                type="email"
                name="userEmail"
                placeholder="email"
                value={userEmail}
                onChange={(e) => dispatch(e.target)}
                required
            />
            <input
                type="number"
                name="phoneNumber"
                placeholder="phone number"
                value={phoneNumber}
                onChange={(e) => dispatch(e.target)}
            />
            <input
                type="text"
                name="subject"
                placeholder="subject"
                value={subject}
                onChange={(e) => dispatch(e.target)}
                required
            />
            <textarea
                name="message"
                placeholder="message"
                value={message}
                onChange={(e) => dispatch(e.target)}
                required
            />
            <input type="submit" name="message" />
        </form>
    );
}

export default ContactForm;
