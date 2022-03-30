import React,{useReducer, useState, useEffect} from 'react';
import formValidation from './formValidation';
import './styles.css';

const initialState = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    subject:'',
    message:'',
}

const reducer = (state,action) => {
    const {type, value} = action;
    if(type === 'reset'){
        return value
    }
    return {...state, [type]:value}
}

function ContactForm () {
    const [state, dispatch] = useReducer(reducer,initialState);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    function onChange(e) {
        const action = {
            type: e.target.name,
            value: e.target.value
        }
        dispatch(action)
    }

    function resetInputs(){
        const action = {
            type: 'reset',
            value: initialState
        }
        dispatch(action)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setErrors(formValidation(state))
        setIsValid(true);
    }

    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0 && isValid) {
            resetInputs()
            console.log(state);
        }
    }, [errors]);

    const {firstName,lastName,email,phone,subject,message} = state;

    return (
        <div className='form__container'>
            <h2>Write a message:</h2>
            {Object.keys(errors).length === 0 && isValid ? <div>Message was send!</div>: null}
            <form className='form__box'>

                <input
                    className='form__input'
                    type='text'
                    name='firstName'
                    value={firstName}
                    placeholder='First Name'
                    onChange={onChange}
                    required
                />
                {errors.firstName && <p className='form__error'>{errors.firstName}</p>}

                <input
                    className='form__input'
                    type='text'
                    name='lastName'
                    value={lastName}
                    placeholder='Last Name'
                    onChange={onChange}
                    required
                />
                {errors.lastName && <p className='form__error'>{errors.lastName}</p>}

                <input
                    className='form__input'
                    type='email'
                    name='email'
                    value={email}
                    placeholder='E-mail'
                    onChange={onChange}
                    required
                />
                {errors.email && <p className='form__error'>{errors.email}</p>}

                <input
                    className='form__input'
                    type='tel'
                    name='phone'
                    value={phone}
                    placeholder='Phone number'
                    onChange={onChange}
                />

                <input
                    className='form__input'
                    type='text'
                    name='subject'
                    value={subject}
                    placeholder='Subject'
                    onChange={onChange}
                    required
                />
                {errors.subject && <p className='form__error'>{errors.subject}</p>}

                <textarea
                    className='form__input'
                    type='text'
                    name='message'
                    value={message}
                    placeholder='Message...'
                    onChange={onChange}
                    required
                />
                {errors.message && <p className='form__error'>{errors.message}</p>}
                <button type='submit' onClick={handleSubmit}>Send</button>
            </form>
        </div>
    )
};

export default ContactForm;
