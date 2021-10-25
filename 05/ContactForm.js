import React, {useReducer} from 'react';
// import './ContactForm.css'
// import account from './account';

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
    const validateData = ({firstName, lastName, email, title, message}) => {
        const errors = [];
        if (firstName.length<3) errors.push('Wpisz poprawnie imię');
        if (lastName.length<3) errors.push('Wpisz poprawnie nazwisko');
        if (email.length<3 || !email.includes('@')) errors.push('Wpisz poprawnie adres email');
        if (title.length<3) errors.push('Wpisz poprawnie temat wiadomości');
        if (message.length<20) errors.push('treść wiadomości powinna zawierać conajmniej 20 znaków');
        if (errors.length >0 ){
            alert(errors);
            return false;
        } else {return true}
    }
    const handleForm = (e) => {
        e.preventDefault();
        if (validateData(state)) {
            console.log('wysłane')
            console.log(state);
            // dispatch(state=init)
            useReducer(reducer, init);
            const reducer = (state, init) => {
                return {init};
            }
        }
    }

    // console.log(firstName);
    return (<form className="form" onSubmit={(e)=> handleForm(e)}>
        <label className="label">Imię<input name="firstName" value={firstName} onChange={ e => dispatch(e.target)}/></label>
        <label className="label">Nazwisko<input name="lastName" value={lastName} onChange={ e => dispatch(e.target)}/></label>
        <label className="label"> Adres email<input name="email" value={email} onChange={ e => dispatch(e.target)}/></label>
        <label className="label"> Telefon<input name="phone" value={phone}  onChange={ e => dispatch(e.target)}/></label>
        <label className="label"> Temat<input name="title" value={title} onChange={ e => dispatch(e.target)}/></label>
        <label className="label">Treść wiadomości<input name="message" value={message} onChange={ e => dispatch(e.target)}/></label>
        <input type="submit"/>
        
    </form>);
};

export default ContactForm;
