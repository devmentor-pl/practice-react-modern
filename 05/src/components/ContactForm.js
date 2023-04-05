import React, { useReducer, useState, useRef } from 'react';

import formItems from '../data';
import validateForm from '../validateForm';
import sendEmail from '../sendEmail';
import './ContactForm.css';
import ContactFormControls from './ContactFormControls';

const ContactForm = () => {
    const init = { name: '', email: '', phone: '', subject: '', message: '' };
    const form = useRef();

    const reducer = (state, action) => {
        switch (action.type) {
            case 'inputChange': {
                return { ...state, [action.name]: action.value };
            }
            case 'clear': {
                return action.value;
            }
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, init);
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const changeHandler = (e) => {
        dispatch({ type: 'inputChange', name: e.target.name, value: e.target.value });
    };

    const clearHandler = () => {
        dispatch({ type: 'clear', value: init });
        setErrors([]);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const errorsList = validateForm(formItems, state);
        if (errorsList.length > 0) {
            setErrors(errorsList);
            return;
        }

        sendEmail(form.current);
        setSuccess(true);
        clearHandler();
    };

    return (
        <div className="wrapper">
            <form className="form" onSubmit={submitHandler} ref={form}>
                <h1 className="form__title">Wyślij nam wiadomość!</h1>
                {formItems.map((item) => (
                    <ContactFormControls
                        key={item.name}
                        field={item}
                        onChange={changeHandler}
                        errors={errors}
                        onFocus={() => success && setSuccess(false)}
                        value={state[item.name]}
                    />
                ))}
                {success ? <p className="form__success-text">Dziękujemy za wiadomość!</p> : null}
                <div className="form__control-btns">
                    <button className="control-btn control-btn--send" type="submit">
                        wyślij
                    </button>
                    <button
                        className="control-btn control-btn--clear"
                        type="button"
                        name="clear"
                        onClick={clearHandler}
                    >
                        wyczyść
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
