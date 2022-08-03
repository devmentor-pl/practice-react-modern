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

    // const divFormName = {display: 'inline-block', width: '80px'}

    const onSubmit = e => {
        e.preventDefault()
        console.log('submit')
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">
                    <div style={{display: 'inline-block', width: '80px'}}>
                        name 
                    </div>
                    <input name="firstName" {...firstName} id='firstName' />
                </label>
            </div>
            <div>
                <label htmlFor="lastName">
                    <div style={{display: 'inline-block', width: '80px'}}>
                        last
                    </div>
                    <input name="lastName" {...lastName} id='lastName' />
                </label>
            </div>
            <div>
                <label htmlFor="email">
                    <div style={{display: 'inline-block', width: '80px'}}>
                        email
                    </div>
                    <input name="email" {...email} />
                </label>
            </div>
            <div>
                <label htmlFor="phone">
                    <div style={{display: 'inline-block', width: '80px'}}>
                        phone
                    </div>
                    <input name="phone" {...phone} />
                </label>
            </div>
            <div>
                <label htmlFor="subject">
                    <div style={{display: 'inline-block', width: '80px'}}>
                        subject
                    </div>
                    <input name="subject" {...subject} />
                </label>
            </div>
            <div>
                <label htmlFor="news">
                    <div style={{display: 'inline-block', width: '80px'}}>
                        news
                    </div>
                    <input name="news" {...news} />
                </label>
            </div>
        </form>
    )
}

export default ContactForm;
