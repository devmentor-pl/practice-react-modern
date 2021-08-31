import React, { useReducer } from 'react';

const ContactForm = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        topic: '',
        message: '',
    };

    const reducer = (state, { name, value }) => {
        const newState = { ...state, [name]: value };
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const { firstName, lastName, email, number, topic, message } = state;

    const submit = e => {
        e.preventDefault();

        if (firstName.length < 1) {
            alert('Podaj prawidłowe imię!');
            return;
        }
        if (lastName.length < 1) {
            alert('Podaj prawidłowe nazwisko!');
            return;
        }
        if (email.length < 1 || !email.includes('@')) {
            alert('Podaj prawidłowy email!');
            return;
        }
        if (number.length < 1) {
            alert('Podaj prawidłowy nr telefonu!');
            return;
        }
        if (topic.length < 1) {
            alert('Podaj prawidłowy temat!');
            return;
        }
        if (message.length < 1) {
            alert('Podaj treść wiadomości!');
            return;
        }
    };

    return (
        <form onSubmit={submit}>
            <label htmlFor="firstName">
                Imię:
                <input type="text" id="firstName" value={firstName} name="firstName" onChange={e => dispatch(e.target)} />
            </label>
            <label htmlFor="lastName">
                Nazwisko:
                <input type="text" id="lastName" value={lastName} name="lastName" onChange={e => dispatch(e.target)} />
            </label>
            <label htmlFor="email">
                Email:
                <input type="text" id="email" value={email} name="email" onChange={e => dispatch(e.target)} />
            </label>
            <label htmlFor="number">
                Numer telefonu:
                <input type="number" id="number" value={number} name="number" onChange={e => dispatch(e.target)} />
            </label>
            <label htmlFor="topic">
                Temat:
                <input type="text" id="topic" value={topic} name="topic" onChange={e => dispatch(e.target)} />
            </label>
            <label htmlFor="message">
                Treść wiadomości:
                <textarea name="message" id="message" value={message} onChange={e => dispatch(e.target)} />
            </label>
            <button type="submit">Wyślij</button>
        </form>
    )
};

export default ContactForm;
