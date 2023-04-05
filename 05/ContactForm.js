import React, { useReducer, useState, useRef } from 'react';

import formItems from './data';
import validateForm from './validateForm';
import sendEmail from './sendEmail';
import './ContactForm.css';

const ContactForm = () => {
    const init = { name: '', email: '', phone: '', subject: '', message: '' };
    const form = useRef();

    const reducer = (state, action) => {
        /* eslint-disable */
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
        /* eslint-enable */
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

    const showError = (label) => {
        const errorsByLabel = errors.filter((item) => item.includes(label));

        return errorsByLabel.map((err, i) => (
            // eslint-disable-next-line
            <p className="form-box__error-text" key={i}>
                {err}
            </p>
        ));
    };

    const renderFormControls = (formControls) =>
        formControls.map((item) => {
            const Tag = item.htmlTag;

            return (
                <div className="form-box" key={item.name}>
                    <label htmlFor={item.name} className="form-box__label">
                        {item.required ? `*${item.label}:` : `${item.label}`}
                    </label>
                    <Tag
                        className="form-box__input"
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        id={item.name}
                        onChange={changeHandler}
                        value={state[item.name]}
                        onFocus={() => setSuccess(false)}
                    />
                    {errors.length > 0 ? (
                        <div className="form-box__errors">{showError(item.label)}</div>
                    ) : null}
                </div>
            );
        });

    // eslint-disable-next-line
    // console.log(account);
    return (
        <div className="wrapper">
            <form onSubmit={submitHandler} ref={form}>
                <h1 className="form-box__title">Wyślij nam wiadomość!</h1>
                {renderFormControls(formItems)}
                {success ? <p>Dziękujemy za wiadomość!</p> : null}
                <div className="form-box__control-btns">
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
