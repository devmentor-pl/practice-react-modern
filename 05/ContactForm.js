import React, {useReducer, useRef} from 'react';
import {init, sendForm} from 'emailjs-com';
import account from './account';

// helpers
import validationName from './helpers/ValidationName';
import validationEmail from './helpers/ValidationEmail';
import validationTelephone from './helpers/ValidationTelephone';
import validationMessage from './helpers/ValidationMessage';

// utils
import numberOnly from './utils/NumberOnly';
import alphaOnly from './utils/AlphaOnly';
// import numberSeparator from './utils/NumberSeparator';

init(account.user_id);
console.log(account.user_id);

const ContactForm = () => {
    console.log(account);

    const initialize = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    };

    let validationErrors = [];
    let validationErrorsAlert = [];
    const formRef = useRef(null);

    const reducer = (state, {name, value}) => {
        const newState = {...state};
        newState[name] = value;
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, initialize);

    const {firstName, lastName, email, phone, subject, message} = state;

    const validationForm = () => {
        if (validationName(firstName)) {
            validationErrors.push('Imię jest wymagane!\n');
        }
        if (validationName(lastName)) {
            validationErrors.push('Nazwisko jest wymagane!\n');
        }
        if (validationEmail(email)) {
            validationErrors.push('Adres email jest niepoprawny!\n');
        }
        if (validationTelephone(phone)) {
            validationErrors.push('Nr telefonu jest niepoprawny!\n');
        }
        if (validationMessage(subject)) {
            validationErrors.push('Podaj temat wiadomości!\n');
        }
        if (validationMessage(message)) {
            validationErrors.push('Napisz wiadomość!\n');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        validationForm(firstName, lastName, email, phone, subject, message);

        if (validationErrors.length > 0) {
            validationErrorsAlert = validationErrors;
            validationErrors = [];
            window.alert(validationErrorsAlert);
        }

        sendForm(account.service_id, account.template_id, '#form')
            .then((response, error) => {
                if (response) {
                    window.alert('Email został wysłany!');
                } else if (error) {
                    window.alert('Błąd podczas wysyłania emaila');
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <form id='form' ref={formRef} style={{display: 'flex', flexDirection: 'column', width: '30%'}} noValidate>
            <section>Imię</section>
            <input 
                name='firstName' 
                value={firstName} 
                onKeyPress={alphaOnly}
                autoComplete='off' 
                placeholder='Imię'
                onChange={e => dispatch(e.target)}
            />
            <section>Nazwisko</section>
            <input 
                name='lastName' 
                value={lastName} 
                onKeyPress={alphaOnly}
                autoComplete='off' 
                placeholder='Nazwisko'
                onChange={e => dispatch(e.target)}
            />
            <section>Email</section>
            <input 
                name='email' 
                value={email} 
                autoComplete='off' 
                placeholder='email'
                onChange={e => dispatch(e.target)}
            />
            <section>Telefon</section>
            <input 
                name='phone' 
                value={phone} 
                type='text' 
                onKeyPress={numberOnly} 
                maxLength='9'
                placeholder='telefon 600 600 600'
                onChange={e => dispatch(e.target)}
            />
            <section>Temat</section>
            <input 
                name='subject' 
                value={subject} 
                onChange={e => dispatch(e.target)}/>
            <section>Wiadomość</section>
            <input 
                name='message'
                alue={message} 
                onChange={e => dispatch(e.target)}/>
            <button 
                type='submit' 
                style={{margin: '10px'}}
                onClick={e => handleSubmit(e)}>
                Wyślij
            </button>
        </form>
    );
};

export default ContactForm;
