import { number } from 'prop-types';
import React from 'react';
import { useReducer} from 'react';

const style={
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    border: '1px solid #dfdfdf',
    padding: '20px',
    borderRadius: '5px',
    background: 'lighgrey',
    textAlign: 'center',
}


function ContactForm() {
    const initialState = {
        name: '',
        email: '',
        tel: '',
        title: '',
        textarea: '',
    }
    
    function reducer (state, action) {
            return {...state, [action.input]: action.value }
    }

    function validateName(state) {
        if(state.name.length < 3) {
            return 'Minimum three signs are required'
        }
    }

    function validateEmail(state) {
        if(!state.email.includes("@")) {
            return 'Please enter email in a correct format'
        }
    }

    function validateEmail(state) {
        if(!state.email.includes("@")) {
            return 'Please enter email in a correct format'
        }
    }   

    function validateTel(state) {
        if(isNaN(state.tel)) {
            return 'Please enter only numbers'
        }
    }

    function validateTitle(state) {
        if(state.title.length < 3) {
            return 'Minimum three signs are required'
        }
    }

    function validateText(state) {
        if(state.textarea.length === 0) {
            return 'Minimum three signs are required'
        }
    }
   
    function handleClick (e) {
        e.preventDefault()
    }
    
    const[state, dispatch] = useReducer(reducer, initialState);

    function onChange (e) {
        const action = {
            input: e.target.name,
            value: e.target.value
        }
        dispatch(action)

    }
    return (
    <section>
        <form style={style} noValidate>
            <label>Enter your name: </label>
            <input type="text" name="name" onChange={onChange}></input>
            <div> {validateName(state)}</div>
            <label>Enter your email: </label>
            <input type="email" name="email" onChange={onChange}></input>
            <div> {validateEmail(state)}</div>
            <label>Enter your phone number: </label>
            <input type="tel" name="tel" onChange={onChange}></input>
            <div> {validateTel(state)}</div>
            <label>How can we help you? </label>
            <input type="text" name="title" onChange={onChange}></input>
            <div> {validateTitle(state)}</div>
            <textarea name="textarea" onChange={onChange}></textarea>
            <div> {validateText(state)}</div>
            <button onClick={handleClick}>SUBMIT</button>
        </form>
    </section>
    )
}

export default ContactForm;
