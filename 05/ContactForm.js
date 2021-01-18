import React, { useReducer } from 'react';

import './styles/ContactForm.css'

// import account from './account';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',  
}
const reducer = (state, action) => {
    switch(action.type) {
    case 'set-firstName': return {...state, firstName: action.payload}
    case 'set-lastName': return {...state, lastName: action.payload}
    case 'set-email': return {...state, email: action.payload}
    case 'set-phone': return {...state, phone: action.payload}
    case 'set-subject': return {...state, subject: action.payload}
    case 'set-message': return {...state, message: action.payload}
    default: throw new Error();
    }
}

const ContactForm = () => {
    // console.log(account);
    const [state, dispatch] = useReducer(reducer, initialState)

    const RowFirstName = <p>
        <label htmlFor='firstName'>First name*:
            <input type='text' 
                id='firstName'
                value={ state.firstName }
                onChange={ e => dispatch({ type: 'set-firstName', payload: e.target.value }) }
                placeholder='minimum two characters' 
                minLength='2' 
                required />
        </label>
    </p>
    const RowLastName = <p>
        <label htmlFor='lastName'>Last name*:
            <input type='text'
                id='lastName'
                value={ state.lastName }
                onChange={ e => dispatch({ type: 'set-lastName', payload: e.target.value }) }
                placeholder='minimum two characters' 
                minLength='2' 
                required />
        </label>
    </p>
    const RowEmail = <p>
        <label htmlFor='email'>Email*:
            <input type='email' 
                id='email'
                value={ state.email }
                onChange={ e => dispatch({ type: 'set-email', payload: e.target.value }) }
                placeholder='valid email address' 
                required />
        </label>
    </p>
    const RowPhone = <p>
        <label htmlFor='phone'>Phone number:
            <input type='tel' 
                id='phone'
                value={ state.phone }
                onChange={ e => dispatch({ type: 'set-phone', payload: e.target.value }) }
                placeholder='xxx-xxx-xxx' 
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}' />
        </label>
    </p>
    const RowSubject = <p>
        <label htmlFor='subject'>Subject*:
            <input type='text' 
                id='subject'
                value={ state.subject }
                onChange={ e => dispatch({ type: 'set-subject', payload: e.target.value }) }
                placeholder='minimum five characters' 
                minLength='5' 
                required />
        </label>
    </p>
    const RowMessage = <p>
        <label htmlFor='message'>Message*:
            <textarea 
                id='message'
                value={ state.message }
                onChange={ e => 
                    dispatch({ type: 'set-message', payload: e.target.value }) }              
                rows="4" 
                cols="50" 
                required />
        </label>
    </p>
    
    return <form onSubmit={ e => {
        e.preventDefault();
        window.alert('Form completed sucessfuly')}}>
        { RowFirstName }
        { RowLastName }
        { RowEmail }
        { RowPhone }
        { RowSubject }
        { RowMessage }
        <p>Fields with * are required</p>
        <p>
            <input type='submit' />
        </p>
    </form>;
};

export default ContactForm;
