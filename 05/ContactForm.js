/* eslint-disable arrow-body-style */
import React, { useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';

// import account from './account';

const style = {
    display: 'flex',
    flexDirection: 'column'
}

const labelStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    marginTop: '10px'
}

const errorStyle = {
    padding: 0,
    listStyle: 'none',
    color: 'red'
}

function ContactForm() {
    const fields = [
        { name: 'userName', type: 'text', label: "Imię i nazwisko", required: true, id: '1' },
        { name: 'email', type: 'text', label: "Email", required: true, pattern: /^[-\w.]+@([-\w]+\.)+[a-z]+$/i, id: '2' },
        { name: 'phoneNumber', type: 'text', label: "Numer telefonu (9 cyfr)", required: false, pattern: /^\d{9}$/, id: '3' },
        { name: 'subject', type: 'text', label: "Temat", required: true, id: '4' },
        { name: 'message', type: 'textarea', label: "Wiadomość", required: true, id: '5' },
    ]
    const init = {
        userName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    }

    const [errorsList, setErrorsList] = useState([])

    const reducer = (state, action) => {
        if (action.type === 'reset') {
            return init
        }
        return { ...state, [action.name]: action.value }
    }

    const [state, dispatch] = useReducer(reducer, init)

    const formValidate = () => {
        const errors = []
        fields.forEach(field => {
            const value = state[field.name]

            if (field.required) {
                if (value.length === 0) {
                    const newError = `Pole ${field.label} jest wymagane.`
                    errors.push(newError)
                }
            }

            if (value.length !== 0) {
                if (field.pattern) {
                    const reg = new RegExp(field.pattern)
                    if (!reg.test(value)) {
                        const newError = `Dane w polu ${field.label} zawierają niedozwolone znaki lub nie są zgodne z przyjętym w Polsce wzorem.`
                        errors.push(newError)
                    }
                }
            }
        })
        return errors
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setErrorsList([])

        const formErrors = formValidate()

        setErrorsList(formErrors)

        if (formErrors.length === 0) {
            dispatch({ type: 'reset' })
        }
    }

    const renderFields = () => fields.map((item) =>
        <label
            // key={uuid()} //nie wiem dlaczego jeśli mam key oznaczone w en sposób, to mogę wpisać w pole tylko jeden znak i później robi się nieaktywne
            key={item.id}
            style={labelStyle}
            htmlFor={item.name} >{item.label}
            {item.type === 'text' && <input
                id={item.name}
                type={item.type}
                name={item.name}
                value={state[item.name]}
                onChange={(e) => dispatch(e.target)} />}
            {item.type === 'textarea' && <textarea
                id={item.name}
                type={item.type}
                name={item.name}
                value={state[item.name]}
                onChange={(e) => dispatch(e.target)} />}
        </label>)

    const renderErrors = () => {
        const listItems = errorsList.map(err => <li key={uuid()}>{err}</li>)

        return <ul style={errorStyle}>{listItems}</ul>
    }

    return (
        <>
            <form style={style} onSubmit={submitHandler}>
                {renderFields()}
                <label style={labelStyle} htmlFor='submit'>
                    <input id='submit' type="submit" name="submit" />
                </label>
            </form>
            {errorsList.length !== 0 && renderErrors()}
        </>
    );

}
export default ContactForm;
