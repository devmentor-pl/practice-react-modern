import React, { useReducer } from 'react';
import { UPDATE_FORM, handleChange, onFocusOut } from './formHandler';

const FormStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '500px'
};

const MsgStyles = {
    height: '100px'
};

const ContactForm = () => {
    const init = {
        fullName: { value: '', touched: false, hasError: true, error: '' },
        email: { value: '', touched: false, hasError: true, error: '' },
        phone: { value: '', touched: false, hasError: true, error: '' },
        title: { value: '', touched: false, hasError: true, error: '' },
        message: { value: '', touched: false, hasError: true, error: '' },
        isFormValid: false
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case UPDATE_FORM:
                const { name, value, hasError, error, touched, isFormValid } = action.data;
                return {
                    ...state,
                    [name]: { ...state[name], value, hasError, error, touched, isFormValid }
                };
            default:
                return state;
        }
    };

    const [formState, dispatch] = useReducer(reducer, init);

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <form style={FormStyles} onSubmit={handleSubmit}>
            <label htmlFor="fullName">Name and surname:</label>
            <input
                type="text"
                name="fullName"
                id="fullName"
                value={formState.fullName.value}
                onChange={e => handleChange('fullName', e.target.value, dispatch, formState)}
                onBlur={e => {
                    onFocusOut('fullName', e.target.value, dispatch, formState);
                }}
            />
            {formState.fullName.touched && formState.fullName.hasError && (
                <div>{formState.fullName.error}</div>
            )}
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                name="email"
                id="email"
                value={formState.email.value}
                onChange={e => handleChange('email', e.target.value, dispatch, formState)}
                onBlur={e => {
                    onFocusOut('email', e.target.value, dispatch, formState);
                }}
            />
            {formState.email.touched && formState.email.hasError && (
                <div>{formState.email.error}</div>
            )}
            <label htmlFor="phone">Mobile:</label>
            <input
                type="text"
                name="phone"
                id="phone"
                value={formState.phone.value}
                onChange={e => handleChange('phone', e.target.value, dispatch, formState)}
                onBlur={e => {
                    onFocusOut('phone', e.target.value, dispatch, formState);
                }}
            />
            {formState.phone.touched && formState.phone.hasError && (
                <div>{formState.phone.error}</div>
            )}
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                name="title"
                id="title"
                value={formState.title.value}
                onChange={e => handleChange('title', e.target.value, dispatch, formState)}
                onBlur={e => {
                    onFocusOut('title', e.target.value, dispatch, formState);
                }}
            />
            {formState.title.touched && formState.title.hasError && (
                <div>{formState.title.error}</div>
            )}
            <label htmlFor="message">Your message:</label>
            <textarea
                type="text"
                name="message"
                id="message"
                value={formState.message.value}
                onChange={e => handleChange('message', e.target.value, dispatch, formState)}
                style={MsgStyles}
                onBlur={e => {
                    onFocusOut('message', e.target.value, dispatch, formState);
                }}
            />
            {formState.message.touched && formState.message.hasError && (
                <div>{formState.message.error}</div>
            )}
            <input type="submit" value="Submit" />
        </form>
    );
};

export default ContactForm;
