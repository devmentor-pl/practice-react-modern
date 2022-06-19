
import React, {useReducer} from 'react';


function ContactForm() {

    const init = {firstName:'', lastName:'', email:'', phoneNumber:'', topic:'', message:'' }
    const reducer = (state, {name, value}) => {
        const newState = { ...state }
        newState[name] = value;
        return newState;
    }
       
    const [state, dispatch] = useReducer(reducer, init)
    const {firstName, lastName, email, phoneNumber, topic, message} = state;


    const checkForm = errors => {
        if(firstName.length < 1) {
            errors.push("Należy wpisać imię")
        }
        if(lastName.length < 1) {
            errors.push("Należy wpisać nazwisko")
        }

        if(!email.includes('@')) {
            errors.push("Nieprawidłowy adres email")
        }
    
        const regDate = /^\+?[1-9][0-9]{7,14}$/
        if(!regDate.test(phoneNumber)) {
            errors.push('Nieprawidłowy numer telefonu')
        }

        if(topic.length < 1) {
            errors.push("Należy wpisać temat wiadomości")
        }

        if(message.length < 1) {
            errors.push("Należy wpisać treść wiadomości")
        }
    }

    const submitHandler = e => {
        e.preventDefault()

        const errors = []

        checkForm(errors)

        if(errors.length === 0) {
            /* eslint-disable no-alert */
            window.alert('Formularz został wysłany')

        } else {
            window.alert(errors.join(",\n "))
            /* eslint-enable no-alert */
        }   
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '200px'
    }

    return (
        <form style={formStyle} onSubmit={e => submitHandler(e)}>
            <input name='firstName' placeholder="imie" type='text'
                value={firstName} onChange={ e => dispatch(e.target) }/>

            <input name='lastName' placeholder="nazwisko" type='text' 
                value={lastName} onChange={ e => dispatch(e.target) }/>

            <input name='email' placeholder="email"type='email' 
                value={email} onChange={ e => dispatch(e.target) }/>

            <input name='phoneNumber' placeholder="numer telefonu"type='tel' 
                value={phoneNumber} onChange={ e => dispatch(e.target) }/>

            <input name='topic' placeholder="temat"type='text' 
                value={topic} onChange={ e => dispatch(e.target) }/>

            <input name='message' placeholder="wiadomość" type='textarea' 
                value={message} onChange={ e => dispatch(e.target) }/>

            <input type='submit' value='Wyślij'/>
        </form>
    )
}

export default ContactForm;
