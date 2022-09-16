/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useReducer } from 'react';

function ContactForm() {
    const init = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        subject: '',
        message: '',
    };

    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, init);
    const { firstName, lastName, phoneNumber, subject, message } = state;

    const validateData = () => {
        const regNumber = /[0-9]{3}-[0-9]{3}-[0-9]{3}/
        if(firstName.length < 3 || lastName.length < 3){
            alert('Both First and Last Name should contain at least 3 signs!')
        } else if (!regNumber.test(phoneNumber)){
            alert('Phone number should contain 9 numbers (XXX-XXX-XXX)')
        } else if (subject.length < 3){
            alert('Subject should contain at least 3 signs!')
        } else if (message.length < 3) {
            alert('Message should contain at least 3 signs!') 
        } 
    };

    const onClick = (e) => {
        validateData();
        e.preventDefault();
    };

    return (
        <form>
            <input name="firstName" value={firstName} onChange={(e) => dispatch(e.target)} />
            <input name="lastName" value={lastName} onChange={(e) => dispatch(e.target)} />
            <input name="phoneNumber" value={phoneNumber} onChange={(e) => dispatch(e.target)} />
            <input name="subject" value={subject} onChange={(e) => dispatch(e.target)} />
            <textarea
                name="message"
                value={message}
                onChange={(e) => dispatch(e.target)}
            />
            <button onClick={(e) => onClick(e)}>SEND</button>
        </form>
    );
}

export default ContactForm;
