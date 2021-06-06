import React, { useReducer } from 'react';

/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */

const ContactForm = () => {
    const initialState = {
        username: '',
        lastName: '',
        email: '',
        number: '',
        topic: '',
        textMessage: '',
    };

    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const { username, lastName, email, number, topic, textMessage } = state;

    const submitHandler = e => {
        e.preventDefault();

        if (username.trim().length < 1) {
            alert('Please type username!');
            return;
        }

        if (lastName.trim().length < 1) {
            alert('Please type lastname!');
            return;
        }

        if (email.trim().length < 1 || !email.includes('@')) {
            alert('Please type correct email!');
        }

        if (topic.trim().length < 1) {
            alert('Please type topic!');
        }

        if (textMessage.trim().length < 1) {
            alert('Please type text message!');
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="username">
                User name:
                <input type="text" id="username" value={username} name="username" onChange={e => dispatch(e.target)} />
            </label>{' '}
            <label htmlFor="lastName">
                Last name:
                <input type="text" id="lastName" value={lastName} name="lastName" onChange={e => dispatch(e.target)} />
            </label>
            <label htmlFor="email">
                Email:
                <input type="text" id="email" value={email} name="email" onChange={e => dispatch(e.target)} />
            </label>
            <label htmlFor="number">
                Phone number:
                <input type="number" id="number" value={number} name="number" onChange={e => dispatch(e.target)} />
            </label>
            <label htmlFor="topic">
                Topic:
                <input type="text" id="topic" value={topic} name="topic" onChange={e => dispatch(e.target)} />
            </label>
            <label htmlFor="textMessage">
                Text message:
                <textarea name="textMessage" id="textMessage" value={textMessage} onChange={e => dispatch(e.target)} />
            </label>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
