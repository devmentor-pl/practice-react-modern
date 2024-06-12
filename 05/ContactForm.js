/* eslint-disable no-unused-vars */

import React, { useReducer} from 'react';
import validateForm from './validator';
import './styles.css';
import fields from './fields';
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
        const errors = validateForm(form.current, fields);
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
    const formElementsList = fields.map(element =>{
        const Tag = element.htmlTag;
        return (
            <label className="form__label" htmlFor={element.name}>
                {element.label}
                <Tag className={element.class} type={element.type} name={element.name}/>
                {state.errors !== null && state.errors[element.name] ? <span className="form__error"style={{color: "red"}}>{state.errors[element.name]}</span> : null}
            </label>
        )
    })

    return (
        <form className="form" ref={formRef} onSubmit={(e)=>handleSubmit(e, formRef)}>
            {formElementsList}
            {state.success ? <span>Dziękujemy za wiadomość!</span> : null}
            <button className="form__button" type="submit">Wyślij</button>
        </form>
    )
}

export default ContactForm;
