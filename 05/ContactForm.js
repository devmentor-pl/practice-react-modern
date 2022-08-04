/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useReducer} from 'react';

import account from './account';
// import styles from './ContactForm.module.css'

function ContactForm() {
    /* eslint no-console: "off" */
    console.log(account());

    const divFormWrapper = { padding: '5px' }
    const divFormName = { display: 'inline-block', width: '80px' }
    const divError = { color: 'red' }
    const divFormInput = { display: 'inline-block' }

    const onSubmit = e => {
        e.preventDefault()
        console.log('submit')
    }
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
    const { firstName,lastName, email, phone, subject, news } = state

    return (
        <form onSubmit={onSubmit}>
            <div style={divFormWrapper}>
                <label htmlFor="name">
                    <div style={divFormName}>
                        name
                    </div>
                    <div style={divFormInput}>
                        <div style={divError}>xxx</div>
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
                        <div style={divError}>xxx</div>
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
                        <div style={divError}>xxx</div>
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
                        <div style={divError}>xxx</div>
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
                        <div style={divError}>xxx</div>
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
                        <div style={divError}>xxx</div>
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
