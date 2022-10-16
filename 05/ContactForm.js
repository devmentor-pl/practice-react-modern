import React, { useReducer } from 'react';

// import account from './account';

const ContactForm = function () {
    const init = { firstNameAndLastName: '', email: '', phoneNumber: '', topic: '', message: '' };
    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, init);
    const { firstNameAndLastName, email, phoneNumber, topic, message } = state;

    const handleSubmit = function () {};
    // console.log(account);
    return (
        <form onSubmit={handleSubmit}>
            <label>firstNameAndLastName:</label>
            <input
                name="firstNameAndLastName"
                value={firstNameAndLastName}
                onChange={(e) => dispatch(e.target)}
            />
            <label>email:</label>
            <input name="email" value={email} onChange={(e) => dispatch(e.target)} />
            <label>phoneNumber:</label>
            <input name="phoneNumber" value={phoneNumber} onChange={(e) => dispatch(e.target)} />
            <label>topic:</label>
            <input name="topic" value={topic} onChange={(e) => dispatch(e.target)} />
            <label>message:</label>
            <input name="message" value={message} onChange={(e) => dispatch(e.target)} />
            <input type="submit" />
        </form>
    );
};

export default ContactForm;
