/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { useReducer, useRef } from 'react';
import { init, sendForm } from 'emailjs-com';
import account from './account';

init(account.user_id);

const ContactForm = () => {
    const initialize = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    };

    const formRef = useRef(null);

    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, initialize);

    const { firstName, lastName, email, phone, subject, message } = state;

    const submitForm = e => {
        e.preventDefault();
        if (firstName.length < 2) {
            alert('Podaj prawidłowe imię');
            return;
        }
        if (lastName.length < 2) {
            alert('Podaj prawidłowe nazwisko');
            return;
        }
        if (email.length < 5) {
            alert('Podaj prawidłowy mail');
            return;
        }
        if (phone.length < 6) {
            alert('Podaj prawidłowy nr telefonu');
            return;
        }
        if (subject.length < 2) {
            alert('Podaj prawidłowy temat');
            return;
        }
        if (message.length < 2) {
            alert('Podaj treść wiadomości');
            return;
        }

        sendForm(account.service_id, account.template_id, '#form')
            .then((response, error) => {
                if (response) {
                    alert('Mail wysłany!');
                } else if (error) {
                    alert('Błąd podczas wysyłania maila');
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <form id="form" ref={formRef} noValidate>
            <label>Imię</label>
            <input name="firstName" value={firstName} onChange={e => dispatch(e.target)} />
            <label>Nazwisko</label>
            <input name="lastName" value={lastName} onChange={e => dispatch(e.target)} />
            <label>Email</label>
            <input name="email" value={email} onChange={e => dispatch(e.target)} />
            <label>Telefon</label>
            <input name="phone" value={phone} type="number" onChange={e => dispatch(e.target)} />
            <label>Temat</label>
            <input name="subject" value={subject} onChange={e => dispatch(e.target)} />
            <label>Wiadomość</label>
            <input name="message" value={message} onChange={e => dispatch(e.target)} />
            <button type="submit" onClick={e => submitForm(e)}>
                Wyślij
            </button>
        </form>
    );
};

export default ContactForm;
