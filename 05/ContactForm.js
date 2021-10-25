import React, {useReducer} from 'react';
// import account from './account';
import emailjs from "emailjs-com";

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
    const reducer = (state, {name, value}) => {
        return {...state, [name]:value};
    }
    const [state, dispatch] = useReducer(reducer, init);
    const {firstName, lastName, email, phone, title, message} = state;
    const validateData = () => {
        const errors = [];
        if (firstName.length<3) errors.push('Wpisz poprawnie imię');
        if (lastName.length<3) errors.push('Wpisz poprawnie nazwisko');
        if (email.length<3 || !email.includes('@')) errors.push('Wpisz poprawnie adres email');
        if (title.length<3) errors.push('Wpisz poprawnie temat wiadomości');
        if (message.length<20) errors.push('treść wiadomości powinna zawierać conajmniej 20 znaków');
        if (errors.length>0) {
            alert(errors);
            return false
        } else { 
            return true}
    }
    const handleForm = (e) => {
        e.preventDefault();
        if (validateData()) {
            console.log(state);
        }
    }

    return (<form onSubmit={(e)=> handleForm(e)}>
        <label htmlFor="firstName">Imię<input name="firstName" value={firstName} onChange={ e => dispatch(e.target)}/></label>
        <label htmlFor ="lastName">Nazwisko<input name="lastName" value={lastName} onChange={ e => dispatch(e.target)}/></label>
        <label htmlFor ="email"> Adres email<input name="email" value={email} onChange={ e => dispatch(e.target)}/></label>
        <label htmlFor="phone"> Telefon<input name="phone" value={phone}  onChange={ e => dispatch(e.target)}/></label>
        <label htmlFor="title"> Temat<input name="title" value={title} onChange={ e => dispatch(e.target)}/></label>
        <label htmlFor="message">Treść wiadomości<input name="message" value={message} onChange={ e => dispatch(e.target)}/></label>
        <input type="submit"/>    
    </form>);
};

export default ContactForm;
