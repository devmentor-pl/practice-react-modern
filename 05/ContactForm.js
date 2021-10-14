import React, { useReducer, useState } from 'react';

// import account from './account';

const ContactForm = () => {
    const init = {
        data: '',
        email: '',
        phone: 0,
        subject: '',
        message: '',
    }

    const reducer = (state, {name, value}) => {
        const newState = {...state};
        newState[name] = value;
        return newState;
    }

    const [state, setState] = useReducer(reducer, init);
    const { data, email, phone, subject, message } = state;

    return (
        <form noValidate>
            <label htmlFor="data"/>
            <input name="data" type="text" value={ data } onChange={ e => setState(e.target) }/>
            <label htmlFor="email"/>
            <input name="email" type="email" value={ email } onChange={ e => setState(e.target) }/>
            <label htmlFor="phone"/>
            <input name="phone" type="number" value={ phone } onChange={ e => setState(e.target) }/>
            <label htmlFor="subject"/>
            <input name="subject" type="text" value={ subject } onChange={ e => setState(e.target) }/>
            <label htmlFor="message"/>
            <textarea name="message" value={ message } onChange={ e => setState(e.target) }/>
            <input type="submit"/>
        </form>
        );
};

export default ContactForm;
