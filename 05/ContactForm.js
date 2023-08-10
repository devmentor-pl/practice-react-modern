import React,{useReducer, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { serviceId,templateId,publicKey } from '../pass';
import checkCorrectFieldsData from './Validation';

const ContactForm = () => {

    const formRef = useRef();
    const sendMail = () => {
        emailjs.sendForm(
            serviceId, 
            templateId, 
            formRef.current, 
            publicKey
        )
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
            }, (error) => {
                console.log(error.text);
            });
    }

    const init = {
        names: "",
        email: "",
        phone: "",
        subject: "",
        userMessage: ""
    }
    const reducer = (state, action) => {

        const newState = {...state}
        let name; let value;

        switch (action.type) {
        case 'resetState' :
            return action.init;
        default:
            name = action.name;
            value = action.value;
            return {...newState, [name]:value}
        }
    }

    const [state, dispatch] =  useReducer(reducer, init);
    const {names,email,phone,subject,userMessage} =  state;

    const handleSubmit = e => {
        e.preventDefault();
        if(checkCorrectFieldsData(state)){
            sendMail();
            dispatch({ type: 'resetState', init });   
        };
    }

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
    };

    return (
        <form ref={formRef} style={formStyles} onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="names">Name and Surname</label>
            <input name="names" value={names} onChange={ e => dispatch(e.target)} />

            <label htmlFor='email'>Email</label>
            <input name="email" value={email} onChange={ e => dispatch(e.target)} />

            <label htmlFor='phone'>Phone Number</label>
            <input name="phone" value={phone} onChange={ e => dispatch(e.target)} />

            <label htmlFor='subject'>Subject</label>
            <input name="subject" value={subject} onChange={ e => dispatch(e.target)} />

            <label htmlFor='userMessage'>Your Message</label>
            <textarea name="userMessage" value={userMessage} onChange={ e => dispatch(e.target)} />

            <input type='submit' value="Send" />

        </form>
    );
};

export default ContactForm;
