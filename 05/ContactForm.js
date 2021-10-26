import React, {useState, useReducer} from 'react';
// import account from './account';
import emailjs from "emailjs-com";
import ValidateData from './ValidateData'


const ContactForm = () => {
    // console.log(account);
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
        default:
            const {name, value} = action;
            return {...state, [name]:value};
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    const {firstName, lastName, email, phone, title, message} = state;
    // const errors = ValidateData(state);
    const displayErrors = (err) => {
        return err.map(el=><li>{el}</li>);
     }
    
    const handleForm = (e) => {
        e.preventDefault();
        const errors = ValidateData(state)
        if (errors.length>0) {
            return displayErrors(errors);
        } else { console.log(state);
            dispatch({type: 'reset'})}
    }

    return (
        <>
            <form onSubmit={(e)=> handleForm(e)}>
                <label htmlFor="firstName">Imię<input name="firstName" value={firstName} onChange={ e => dispatch(e.target)}/></label>
                <label htmlFor ="lastName">Nazwisko<input name="lastName" value={lastName} onChange={ e => dispatch(e.target)}/></label>
                <label htmlFor ="email"> Adres email<input name="email" value={email} onChange={ e => dispatch(e.target)}/></label>
                <label htmlFor="phone"> Telefon<input name="phone" value={phone}  onChange={ e => dispatch(e.target)}/></label>
                <label htmlFor="title"> Temat<input name="title" value={title} onChange={e => dispatch(e.target)}/></label>
                <label htmlFor="message">Treść wiadomości<textarea name="message" value={message} onChange={ e => dispatch(e.target)}/></label>
                <input type="submit"/>    
            </form>
            <ul> {() => displayErrors()} </ul>
        </>
    );
};

export default ContactForm;
