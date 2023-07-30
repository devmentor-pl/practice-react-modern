import React, { useState, useReducer, useRef } from 'react';
import emailjs from 'emailjs-com';

import account from './account';
import TextField from './TextField';

function ContactForm() {
    // console.log(account);
    const init = { userName: '', email: '', phoneNumber: '', topic: '', message: '' };
    const reducer = (state, { name, value }) => ({ ...state, [name]: value });
    const [state, dispatch] = useReducer(reducer, init);
    const { userName, email, phoneNumber, topic, message } = state;

    const [alert, setAlert] = useState('');

    const form = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        if (userName && email && topic && message) {
            setAlert('');
            emailjs
                .sendForm(account.serviceId, account.templateId, form.current, account.userId)
                .then(
                    (result) => {
                        console.log(result.text);
                        setAlert('Sukces!');
                    },
                    (error) => {
                        console.log(error.text);
                        setAlert('Błąd...', error);
                    },
                );
        } else {
            setAlert('Uzupełnij wymagane pola!');
        }
    };

    return (
        <form ref={form} onSubmit={(e) => submitHandler(e)}>
            <TextField
                text="Imię i nazwisko:"
                name="userName"
                value={userName}
                onChange={(e) => dispatch(e.target)}
            />
            <TextField
                text="*E-mail:"
                name="email"
                value={email}
                onChange={(e) => dispatch(e.target)}
            />
            <TextField
                text="Numer telefonu:"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => dispatch(e.target)}
            />
            <TextField
                text="*Temat:"
                name="topic"
                value={topic}
                onChange={(e) => dispatch(e.target)}
            />
            <TextField
                text="*Wiadomość:"
                name="message"
                value={message}
                onChange={(e) => dispatch(e.target)}
            />
            <input type="submit" />
            <span>{alert}</span>
        </form>
    );
}

export default ContactForm;
