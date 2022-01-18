import React, { useState, useReducer } from 'react';
import ContactFormValidation from './ContactFormValidation';
import fields from './tools/fieldsObj';
// import{ init } from '@emailjs/browser';
// init("user_V4RPdgQVCCobouk7D9u0G");
// import account from './account/account';

function ContactForm() {
    const styleInputs = {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '20px 0',
    };
    const centerSubmit = {
        textAlign: 'center',
    };
    const width = {
        width: '20%',
    };

    const validation = new ContactFormValidation();
    let errors = {};
    let errorsCounter = 0;
    const init = {
        userName: '',
        userEmail: '',
        userPhone: '',
        userSubject: '',
        userMessage: '',
    };
    // To za pomocą SETSTATE

    // <-
    // const [inputValue, setInputValue] = useState(init);
    // const handleInputs = (curr) => {
    // const { name, value } = curr;
    // setInputValue({ ...inputValue, [name]: value });
    // };
    // <-

    const [newErrors, setErrors] = useState({});

    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, init);

    function prepareMessage() {
        const { userName, userEmail, userMessage } = state;
        const sendSettings = {
            service_id: 'service_l4cd3yo',
            template_id: 'template_now6lni',
            user_id: 'user_V4RPdgQVCCobouk7D9u0G',
            data: {
                from_name: userName,
                to_name: userEmail,
                message: userMessage,
            },
        };
        return sendSettings;
    }

    function sendMessage() {
        const messageDetails = prepareMessage();
        console.log(messageDetails);
        const options = {
            method: 'POST',
            body: JSON.stringify(messageDetails),
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch('https://api.emailjs.com/api/v1.0/email/send', options)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                return Promise.reject(resp);
            })
            .catch((err) => err.message);
    }

    const validateInputs = (e) => {
        [errors, errorsCounter] = validation.run(fields, state);

        if (errorsCounter > 0) {
            setErrors(errors);
            e.preventDefault();
        } else {
            alert("You've just sent a message"); //eslint-disable-line
            setErrors('');
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div>
            <form style={centerSubmit} onSubmit={validateInputs} onChange={(e) => dispatch(e.target)}>
                {fields.map((el) => {
                    const { type, name, value, placeholder } = el;
                    return (
                        <div key={name} style={styleInputs}>
                            <input
                                style={width}
                                type={type}
                                name={name}
                                value={value}
                                placeholder={placeholder}
                                autoComplete="off"
                                formNoValidate
                            />
                            <div style={width}>
                                <span>
                                    {newErrors[name] && newErrors[name].length > 0
                                        ? newErrors[name].map((i) => <span key={i}>{i}</span>)
                                        : ''}
                                </span>
                            </div>
                        </div>
                    );
                })}
                <input type="submit" />
            </form>
        </div>
    );
}

export default ContactForm;
