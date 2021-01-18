import React, { useReducer } from 'react';

import './styles/ContactForm.css'
import FormRow from './FormRow'

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
    const allowedActions = ['set-firstName', 'set-lastName', 'set-email',
        'set-phone', 'set-subject', 'set-message']
    const actionType = action.type

    if(allowedActions.includes(actionType)) {
        const fieldName = actionType.substring(4);

        return {...state, [fieldName]: action.payload}
    } 
    throw new Error();
    
}

const ContactForm = () => {
    // console.log(account);
    const [state, dispatch] = useReducer(reducer, initialState)

    const RowFirstName = {
        labelText: 'First name: *', tag: 'input', type: 'text', id: 'firstName', 
        value: state.firstName, onChangeHandler: dispatch, actionType: 'set-firstName', 
        placeholder: 'minimum two characters',  minLength: '2', required: true
    }
    const RowLastName = {
        labelText: 'Last Name: *', tag: 'input', type: 'text', id: 'lastName', 
        value: state.lastName, onChangeHandler: dispatch, actionType: 'set-lastName', 
        placeholder: 'minimum two characters',  minLength: '2', required: true
    }
    const RowEmail = {
        labelText: 'Email: *', tag: 'input', type: 'email', id: 'email', value: state.email,
        onChangeHandler: dispatch, actionType: 'set-email', 
        placeholder: 'valid email address',  minLength: '3', required: true
    }
    const RowPhone = {
        labelText: 'Phone number:', tag: 'input', type: 'tel', id: 'tel', value: state.phone,
        onChangeHandler: dispatch, actionType: 'set-phone', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{3}',
        placeholder: 'xxx-xxx-xxx',  minLength: '', required: false
    }
    const RowSubject = {
        labelText: 'Subject: *', tag: 'input', type: 'text', id: 'subject', value: state.subject,
        onChangeHandler: dispatch, actionType: 'set-subject',
        placeholder: 'minimum five characters',  minLength: '5', required: true
    }
    const RowMessage = {
        labelText: 'Message: *', tag: 'textarea', id: 'message', value: state.message,
        onChangeHandler: dispatch, actionType: 'set-message', rows: '4', cols: '50',
        placeholder: 'minimum ten characters',  minLength: '10', required: true
    }

    const submitHandler = e => {
        e.preventDefault();
        window.alert('Form completed sucessfuly')
    }
    
    return <form onSubmit={ submitHandler }>
        <FormRow definition={ RowFirstName }  />
        <FormRow definition={ RowLastName }  />
        <FormRow definition={ RowEmail }  />
        <FormRow definition={ RowPhone }  />
        <FormRow definition={ RowSubject }  />
        <FormRow definition={ RowMessage }  />

        <p>Fields with * are required</p>
        <p>
            <input type='submit' />
        </p>
    </form>;
};

export default ContactForm;
