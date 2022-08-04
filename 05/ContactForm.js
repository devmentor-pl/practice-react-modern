/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react';

import account from './account';
// import styles from './ContactForm.module.css'

function ContactForm() {
    /* eslint no-console: "off" */
    console.log(account());

    const [errors, setErrors] = React.useState({ 'a': 10 })

    const divFormWrapper = { padding: '5px' }
    const divFormName = { display: 'inline-block', width: '80px' }
    const divError = { color: 'red' }
    const divFormInput = { display: 'inline-block' }

    const init = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        news: '',
    }
    const reducer = (state, { name, value }) => {
        const newState = { ...state }
        newState[name] = value;
        return newState;
    }
    const [state, dispatch] = useReducer(reducer, init);
    // eslint-disable-next-line no-unused-vars
    const { firstName, lastName, email, phone, subject, news } = state

    const onSubmit = e => {
        e.preventDefault()
        console.log('submit')
        setErrors({})
        if (state.firstName.length < 3) {
            setErrors(val => ({ ...val, firstName: 'Enter at least 3 chars' }))
        }
        if (state.lastName.length < 3) {
            setErrors(val => ({ ...val, lastName: 'Enter at least 3 chars' }))
        }
        // eslint-disable-next-line no-useless-escape
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const checkEmail = state.email.match(mailformat)
        if (state.email.length < 3) {
            setErrors(val => ({ ...val, email: 'Enter at least 3 chars' }))
        } else if (!checkEmail) {
            setErrors(val => ({ ...val, email: 'Email is not good' }))
        }
        if (state.phone.length < 3) {
            setErrors(val => ({ ...val, phone: 'Enter at least 3 chars' }))
        } else if (Number.isNaN(Number(state.phone))) {
            console.log('Not a number')
            setErrors(val => ({ ...val, phone: 'Not a number' }))
        }
        if (state.subject.length < 3) {
            setErrors(val => ({ ...val, subject: 'Enter at least 3 chars' }))
        }
        if (state.news.length < 3) {
            setErrors(val => ({ ...val, news: 'Enter at least 3 chars' }))
        }
    }

    React.useEffect(() => {
        const test = Object.keys(errors)
        console.log(test)
        if (test.length === 0) {
            console.log('Form sending ....')
        } else {
            console.log('Form NOT send')
        }
    }, [errors])

    return (
        <form onSubmit={onSubmit}>
            <div style={divFormWrapper}>
                <label htmlFor="name">
                    <div style={divFormName}>
                        name
                    </div>
                    <div style={divFormInput}>
                        <div style={divError}>{errors.firstName}</div>
                        <input
                            name="firstName"
                            value={firstName}
                            onChange={e => dispatch(e.target)}
                            id='name'
                        />
                    </div>
                </label>
            </div>
            <div style={divFormWrapper}>
                <label htmlFor="last">
                    <div style={divFormName}>
                        last
                    </div>
                    <div style={divFormInput}>
                        <div style={divError}>{errors.firstName}</div>
                        <input
                            name="lastName"
                            value={lastName}
                            onChange={e => dispatch(e.target)}
                            id='last'
                        />
                    </div>
                </label>
            </div>
            <div style={divFormWrapper}>
                <label htmlFor="email">
                    <div style={divFormName}>
                        email
                    </div>
                    <div style={divFormInput}>
                        <div style={divError}>{errors.email}</div>
                        <input
                            name="email"
                            value={email}
                            onChange={e => dispatch(e.target)}
                            id='email'
                        />
                    </div>
                </label>
            </div>
            <div style={divFormWrapper}>
                <label htmlFor="phone">
                    <div style={divFormName}>
                        phone
                    </div>
                    <div style={divFormInput}>
                        <div style={divError}>{errors.phone}</div>
                        <input
                            name="phone"
                            value={phone}
                            onChange={e => dispatch(e.target)}
                            id='phone'
                        />
                    </div>
                </label>
            </div>
            <div style={divFormWrapper}>
                <label htmlFor="subject">
                    <div style={divFormName}>
                        subject
                    </div>
                    <div style={divFormInput}>
                        <div style={divError}>{errors.subject}</div>
                        <input
                            name="subject"
                            value={subject}
                            onChange={e => dispatch(e.target)}
                            id='subject'
                        />
                    </div>
                </label>
            </div>
            <div style={divFormWrapper}>
                <label htmlFor="news">
                    <div style={divFormName}>
                        news
                    </div>
                    <div style={divFormInput}>
                        <div style={divError}>{errors.news}</div>
                        <input
                            name="news"
                            value={news}
                            onChange={e => dispatch(e.target)}
                            id='news'
                        />
                    </div>
                </label>
            </div>
            <div style={divFormWrapper}>
                <div style={divFormName} />
                <button type='submit'>SEND</button>
            </div>
        </form>
    )
}

export default ContactForm;
