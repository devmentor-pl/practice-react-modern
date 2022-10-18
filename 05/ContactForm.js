import React, { useReducer } from 'react';

// import account from './account';

const ContactForm = () => {
    // console.log(account);

    const init = { name: '', email: '' };

    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, init);
    const { name, email, subject, message } = state;
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(name, subject, message);
        if (name === '' || subject === '' || message === '' || email === '') {
            alert('Wypełnij pola');
        }
    };

    return (
        <form onSubmit={onSubmitForm}>
            <input
                name="name"
                onChange={(e) => dispatch(e.target)}
                type="text"
                placeholder="name and surname"
            />
            <input
                name="email"
                onChange={(e) => dispatch(e.target)}
                type="email"
                placeholder="email"
            />
            <input type="number" placeholder="telephone" />
            <input
                name="subject"
                onChange={(e) => dispatch(e.target)}
                type="text"
                placeholder="subject"
            />
            <textarea
                name="message"
                onChange={(e) => dispatch(e.target)}
                placeholder="message"
                cols="30"
                rows="8"
            ></textarea>
            <input type="submit"></input>
        </form>
    );
};

export default ContactForm;
