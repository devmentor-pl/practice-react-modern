/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useChangeHandler } from './hooks'

import account from './account';
// import styles from './ContactForm.module.css'

function ContactForm() {
    /* eslint no-console: "off" */

    console.log(account);

    const firstName = useChangeHandler()
    const lastName = useChangeHandler()
    const email = useChangeHandler()
    const phone = useChangeHandler()
    const subject = useChangeHandler()
    const news = useChangeHandler()

    const divFormWrapper = { padding: '5px' }
    const divFormName = { display: 'inline-block', width: '80px' }
    const divError = { color: 'red' }
    const divFormInput = { display: 'inline-block' }

    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors] = React.useState({'a':10})

    const onSubmit = e => {
        e.preventDefault()
        console.log('submit')
        setErrors({})
        console.log( errors )
        const firstNameField = firstName.value
        if (firstNameField.length < 3) {
            // setErrors([...errors, {'firstName':'Enter at least 3 chars'}])     // Array field
            // setErrors(val => [...val, {'firstName':'Enter at least 3 chars'}]) // Array ok
            setErrors(val => ({ ...val, firstName: 'Enter at least 3 chars' }))
        }
        const lastNameField = lastName.value
        if (lastNameField.length < 3) {
            // setErrors(val => [...val, {'lastName':'Enter at least 3 chars'}])
            setErrors(val => ({ ...val, lastName: 'Enter at least 3 chars' }))
        }
        const emailField = email.value
        // eslint-disable-next-line no-useless-escape
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const checkEmail = emailField.match(mailformat)
        if(!checkEmail) {
            setErrors(val => ({ ...val, email: 'Email is not good' }))
        }
        const phoneField = phone.value
        if (phoneField.length < 3) {
            setErrors(val => ({ ...val, phone: 'Enter at least 3 chars' }))
        } else if (Number.isNaN(Number(phoneField))) {
            console.log('Not a number')
            setErrors(val => ({ ...val, phone: 'Not a number' }))
        }
        const subjectField = subject.value
        if (subjectField.length < 3) {
            setErrors(val => ({ ...val, subject: 'Enter at least 3 chars' }))
        }
        const newsField = news.value
        if (newsField.length < 3) {
            setErrors(val => ({ ...val, news: 'Enter at least 3 chars' }))
        }

        // const test = Object.keys(errors)
        // console.log( test )
        // if(test.length === 0) {
        //     console.log('Form sending ....')
        // } else {
        //     console.log('Form NOT send')
        // }
    }

    React.useEffect(() => {
        const test = Object.keys(errors)
        console.log( test )
        if(test.length === 0) {
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
                        <input name="firstName" {...firstName} id='firstName' />
                    </div>
                </label>
            </div>
            <div style={divFormWrapper}>
                <label htmlFor="lastName">
                    <div style={divFormName}>
                        last
                    </div>
                    <div style={divFormInput}>
                        <div style={divError}>{errors.lastName}</div>
                        <input name="lastName" {...lastName} id='lastName' />
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
                        <input name="email" {...email} />
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
                        <input name="phone" {...phone} />
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
                        <input name="subject" {...subject} />
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
                        <input name="news" {...news} />
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
