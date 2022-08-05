/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react';

// import account from './account';
import {mailTo, password} from './account';
// import styles from './ContactForm.module.css'

function ContactForm() {
    /* eslint no-console: "off" */

    // console.log(account());
    // console.log(mailTo());
    // console.log(password());

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
            // console.log('Not a number')
            setErrors(val => ({ ...val, phone: 'Not a number' }))
        }
        if (state.subject.length < 3) {
            setErrors(val => ({ ...val, subject: 'Enter at least 3 chars' }))
        }
        if (state.news.length < 3) {
            setErrors(val => ({ ...val, news: 'Enter at least 3 chars' }))
        }
    }

    const sendForm = () => {
        /* SmtpJS.com - v3.0.0 */
        // eslint-disable-next-line
        const Email = { send(a) { return new Promise((n, e) => { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; const t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, (e) => { n(e) }) }) }, ajaxPost(e, n, t) { const a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { const e = a.responseText; t != null && t(e) }, a.send(n) }, ajax(e, n) { const t = Email.createCORSRequest("GET", e); t.onload = function () { const e = t.responseText; n != null && n(e) }, t.send() }, createCORSRequest(e, n) { let t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : typeof XDomainRequest !== "undefined" ? (t = new XDomainRequest).open(e, n) : t = null, t } };

        function sendEmail() {
            console.log('sendEmail')
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "andisyy@gmail.com",
                Password: password(),
                To: mailTo(),
                From: "andisyy@gmail.com",
                Subject: "Test email",
                Body: "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
            }).then(
                // eslint-disable-next-line
                message => alert(message)
            );
        }
        sendEmail()
    }

    React.useEffect(() => {
        const propertyOfErrors = Object.keys(errors)
        // console.log(propertyOfErrors)
        if (propertyOfErrors.length === 0) {
            console.log('Form sending ....')
            sendForm()
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
