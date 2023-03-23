import React, {useState, useReducer} from 'react';
import validateForm from './validateForm';

function ContactForm () {
    const initialState = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        subject:'',
        message:'',
    }

    function reducer(state, action) {
        const {type, value} = action;
        if(type === "clearInputs") {
            return value
        }
        return {...state, [type]: value}
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const {firstName, lastName, email, phone, subject, message} = state;

    const [errors, setErrors] = useState([])

    function onChange(e) {
        const action = {
            type: e.target.name,
            value: e.target.value
        }
        dispatch(action)
    }

    function clearInputs() {
        const action = {
            type: 'clearInputs',
            value: initialState
        }
        dispatch(action)
    }

    function submitHandler(e) {
        e.preventDefault();
        setErrors(validateForm(state))
        if (errors.length === 0) {
            clearInputs()
        } 
        const isErrors = errors.map(err=> ({text: err}) );
        setErrors(isErrors);
    }

    return (
        <div className="form-container">
            <form className="form">
                <label htmlFor="firstName" className="form-label">Firstname: 
                    <input 
                        className="form-input"
                        value={firstName}
                        type='text'
                        name='firstName'
                        onChange={onChange}
                    /> 
                </label>
                <label htmlFor="lastName" className="form-label">Lastname: 
                    <input 
                        className="form-input"
                        value={lastName}
                        type='text'
                        name='lastName'
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="email" className="form-label">Email: 
                    <input 
                        className="form-input"
                        value={email}
                        type='email'
                        name='email'
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="phone" className="form-label">Phone number: 
                    <input 
                        className="form-input"
                        value={phone}
                        type='tel'
                        name='phone'
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="subject" className="form-label">Subject: 
                    <input 
                        className="form-input"
                        value={subject}
                        type='text'
                        name='subject'
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="message" className="form-label">Message: 
                    <textarea 
                        className="form-input"
                        value={message}
                        type='text'
                        name='message'
                        onChange={onChange}
                    />
                </label>
                <button type='submit' onClick={submitHandler}>Send</button>
            </form>
            {errors.length > 0 && <ul>{errors.map(({text})=><li>{text}</li>)}</ul>}
        </div>
    )

};

export default ContactForm;
