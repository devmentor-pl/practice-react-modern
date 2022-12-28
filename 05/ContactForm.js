
import React, { useReducer} from 'react';
import validateForm from './validator';
import './styles.css';
// import account from './account';

function ContactForm() {
    const formRef = React.createRef(null);
    const init = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        errors: null,
    }
    
    function reducer (state, action){

        switch(action.type){
        case 'SET_ERRORS':
            return {
                ...state,
                errors: action.payload
            }
        case 'SUBMIT_FORM':
            return {
                ...state,
                ...action.payload,
                success: true,
            }
        default: 
            return state
        };
    }
    const [state, dispatch] = useReducer(reducer, init);
    const handleSubmit = (e, form) => {
        e.preventDefault();
        const{name, email, phone, subject, message} = form.current
        const errors = validateForm(form.current);
        const obj = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            subject: subject.value,
            message: message.value,
            errors: null,
    
        }
        if(errors === null){
            dispatch({
                type: 'SUBMIT_FORM',
                payload: obj,
            })
            form.current.reset()
        }else{
            dispatch({
                type: 'SET_ERRORS',
                payload: errors
            })
        }
    }

    return (
        <form className="form" ref={formRef} onSubmit={(e)=>handleSubmit(e, formRef)}>
            <label className="form__label" htmlFor="name">
                Imię i nazwisko:
                <input className="form__input" type="text" name="name" />
                {state.errors !== null && state.errors.name ? <span className="form__error"style={{color: "red"}}>{state.errors.name}</span> : null}
            </label>
            <label className="form__label" htmlFor="email">
                E-mail:
                <input className="form__input" type="text" name="email" />
                {state.errors !== null && state.errors.email ? <span className="form__error" style={{color: "red"}}>{state.errors.email}</span> : null}
            </label>
            <label className="form__label" htmlFor="phone">
                Telefon:
                <input className="form__input" type="text" name="phone" />
                {state.errors !== null && state.errors.phone ? <span className="form__error" style={{color: "red"}}>{state.errors.phone}</span> : null}
            </label>
            <label className="form__label" htmlFor="subject">
                Temat:
                <input className="form__input" type="text" name="subject" />
                {state.errors !== null && state.errors.subject ? <span style={{color: "red"}}>{state.errors.subject}</span> : null}
            </label>
            <label className="form__label" htmlFor="message">
                Wiadomość:
                <textarea className="form__textarea" type="text" name="message" />
                {state.errors !== null && state.errors.message ? <span style={{color: "red"}}>{state.errors.message}</span> : null}
            </label>
            {state.success ? <span>Dziękujemy za wiadomość!</span> : null}
            <button className="form__button" type="submit">Wyślij</button>
        </form>
    )
}

export default ContactForm;
