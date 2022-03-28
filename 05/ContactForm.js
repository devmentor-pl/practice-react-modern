import { func } from 'prop-types';
import React,{useReducer, useState, useEffect} from 'react';
import formValidation from './formValidation';
// import './styles.css';

// błąd Module parse failed: Unexpected token (10:4)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

// Dodawałam moduły, konfigurowałam webpack, błąd nadal występuje, nie potrafie sobie z nim poradzic, dlatego mam style poniej

const stylesContainer ={
    display:'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection:'column'
}

const stylesForm ={
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
}

const stylesInputs = {
    margin:'2px',
    padding:'2px',
    border:'none',
    borderBottom:'1px solid',
    borderBottomColor: 'black',
    width:'250px',
}

const errorStyles = {
    color:'red',
}

const initialState = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    subject:'',
    message:'',
}
const reducer = (state,{name,value}) => {
    const newState = {...state}
    newState[name] = value
    return newState
}

function ContactForm () {
    const [state, dispatch] = useReducer(reducer,initialState);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    function handleSubmit(e) {
        e.preventDefault()
        setErrors(formValidation(state))
        setIsValid(true);
        dispatch(initialState)// dlaczego nie dziala czyszczenie inputow?  przekazuje do f-cji poczatkowy stan, to leci do reducer jako 2 parametr

    }

    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0 && isValid) {
            console.log(state);

        }
    }, [errors]);

    const {firstName,lastName,email,phone,subject,message} = state;
    return (
        <div style={stylesContainer}>
            <h2 className='form__header'>Write a message:</h2>
            <form style={stylesForm}>

                <input
                    className='form__input'
                    style={stylesInputs}
                    type='text'
                    name='firstName'
                    value={firstName}
                    placeholder='First Name'
                    onChange={e=>dispatch(e.target)}
                    required
                />
                {errors.firstName && <p style={errorStyles}>{errors.firstName}</p>}

                <input
                    className='form__input'
                    style={stylesInputs}
                    type='text'
                    name='lastName'
                    value={lastName}
                    placeholder='Last Name'
                    onChange={e=>dispatch(e.target)}
                    required
                />
                {errors.lastName && <p style={errorStyles}>{errors.lastName}</p>}

                <input
                    className='form__input'
                    style={stylesInputs}
                    type='email'
                    name='email'
                    value={email}
                    placeholder='E-mail'
                    onChange={e=>dispatch(e.target)}
                    required
                />
                {errors.email && <p style={errorStyles}>{errors.email}</p>}

                <input
                    className='form__input'
                    style={stylesInputs}
                    type='tel'
                    name='phone'
                    value={phone}
                    placeholder='Phone number'
                    onChange={e=>dispatch(e.target)}
                />

                <input
                    className='form__input'
                    style={stylesInputs}
                    type='text'
                    name='subject'
                    value={subject}
                    placeholder='Subject'
                    onChange={e=>dispatch(e.target)}
                    required
                />
                {errors.subject && <p style={errorStyles}>{errors.subject}</p>}

                <textarea
                    className='form__input'
                    style={stylesInputs}
                    type='text'
                    name='message'
                    value={message}
                    placeholder='Message...'
                    onChange={e=>dispatch(e.target)}
                    required
                />
                {errors.message && <p style={errorStyles}>{errors.message}</p>}

                <button type='submit' onClick={handleSubmit}>Send</button>
                {Object.keys(errors).length === 0 && isValid ? <div>Message was send!</div> : null}
            </form>
        </div>
    )
};

export default ContactForm;
