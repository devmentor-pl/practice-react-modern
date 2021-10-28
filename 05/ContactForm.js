import React, {useState, useReducer} from 'react';
import emailjs from "emailjs-com";
import {v4 as uuid} from 'uuid';
import ValidateData from './ValidateData';
import {serviceID, templateID, userID} from './account';


const ContactForm = () => {
    const init ={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        title: '',
        message: ''
    }
    const reducer = (state, action) => {
        switch (action.type) {
        case 'reset':
            return init;
        case 'change':
            const {name, value} = action.element;
            return {...state, [name]:value};
        default:
            return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    const {firstName, lastName, email, phone, title, message} = state;
    const [err, setErr] = useState([])
        
    const handleForm = (e) => {
        e.preventDefault();
        const errors = ValidateData(state)
        if (errors.length === 0) {
            dispatch({type: 'reset'});
            emailjs.sendForm(serviceID, templateID, e.target, userID) 
                .then((result) => {
                    console.log('SUCCESS!', result);
                }, (error)=> {
                    console.log('FAILED...', error.text);
                });
        }
        const copyErrors = errors.map(error=>{
            return {text: error, id: uuid()}});
        setErr(copyErrors);
    }

    return (
        <>
            <form onSubmit={(e)=> handleForm(e)}>
                <label htmlFor="firstName">Imię<input name="firstName" value={firstName} onChange={ e => dispatch({type: 'change', element: e.target})}/></label>
                <label htmlFor ="lastName">Nazwisko<input name="lastName" value={lastName} onChange={ e => dispatch({type: 'change', element: e.target})}/></label>
                <label htmlFor ="email"> Adres email<input name="email" value={email} onChange={ e => dispatch({type: 'change', element: e.target})}/></label>
                <label htmlFor="phone"> Telefon<input name="phone" value={phone}  onChange={ e => dispatch({type: 'change', element: e.target})}/></label>
                <label htmlFor="title"> Temat<input name="title" value={title} onChange={e => dispatch({type: 'change', element: e.target})}/></label>
                <label htmlFor="message">Treść wiadomości<textarea name="message" value={message} onChange={ e => dispatch({type: 'change', element: e.target})}/></label>
                <input type="submit"/>    
            </form>
            {err.length>0 && <ul>{err.map(({text, id})=><li key={id}>{text}</li>)}</ul>}
        </>
    );
};

export default ContactForm;
