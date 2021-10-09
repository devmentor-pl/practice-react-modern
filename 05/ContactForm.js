import React, { useReducer } from 'react';

const FormStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '500px'
};

const MsgStyles = {
    height: '100px'
};

const ContactForm = () => {
    const init = { fullName: '', email: '', phone: '', title: '', message: '' };
    const reducer = (state, { name, value }) => {
        return { ...state, [name]: value };
    };
    const [state, dispatch] = useReducer(reducer, init);
    const { fullName, email, phone, title, message } = state;

    return (
        <form style={FormStyles}>
            <label htmlFor="fullName">Name and surname:</label>
            <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={e => dispatch(e.target)}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={e => dispatch(e.target)}
            />
            <label htmlFor="phone">Mobile:</label>
            <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={e => dispatch(e.target)}
            />
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={e => dispatch(e.target)}
            />
            <label htmlFor="message">Your message:</label>
            <textarea
                type="text"
                name="message"
                id="message"
                value={message}
                onChange={e => dispatch(e.target)}
                style={MsgStyles}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
