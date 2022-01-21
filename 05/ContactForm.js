import React, { useState, useReducer, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactFormValidation from './ContactFormValidation';
import fields from './tools/fieldsObj';

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
    const form = useRef();

    function prepareMessage() {
        const sendSettings = {
            serviceId: 'service_l4cd3yo',
            templateId: 'template_now6lni',
            userId: 'user_V4RPdgQVCCobouk7D9u0G',
        };
        return sendSettings;
    }

    const sendEmail = () => {
        // e.preventDefault();
        const messageDetails = prepareMessage();
        const { serviceId, templateId, userId } = messageDetails;
        emailjs
            .sendForm(serviceId, templateId, form.current, userId)
            .then((resp) => {
                console.log(resp); //eslint-disable-line
            })
            .catch((err) => {
                console.log(err.message); //eslint-disable-line
            });
    };

    const validateInputs = (e) => {
        e.preventDefault();
        [errors, errorsCounter] = validation.run(fields, state);

        if (errorsCounter > 0) {
            setErrors(errors);
            e.preventDefault();
        } else {
            alert("You've just sent a message"); //eslint-disable-line
            setErrors('');
            e.preventDefault();
            sendEmail();
        }
    };

    return (
        <div>
            <form style={centerSubmit} ref={form} onSubmit={validateInputs} onChange={(e) => dispatch(e.target)}>
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
