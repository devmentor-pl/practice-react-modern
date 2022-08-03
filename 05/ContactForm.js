/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useChangeHandler} from './hooks'

import account from './account';

function ContactForm() {
    /* eslint no-console: "off" */

    console.log(account);

    const {value: valueName, onChange: onChangeName} = useChangeHandler()
    const {value: valueLast, onChange: onChangeLast} = useChangeHandler()
    const {value: valueEmail, onChange: onChangeEmail} = useChangeHandler()
    const {value: valuePhone, onChange: onChangePhone} = useChangeHandler()
    const {value: valueSubject, onChange: onChangeSubject} = useChangeHandler()
    const {value: valueNews, onChange: onChangeNews} = useChangeHandler()
    
    const onSubmit = e => {
        e.preventDefault()
        console.log('submit')
    }
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">
                <input name="name" value={valueName} onChange={onChangeName}/>
            </label>
            <label htmlFor="last">
                <input name="last" value={valueLast} onChange={onChangeLast}/>
            </label>
            <label htmlFor="email">
                <input name="email" value={valueEmail} onChange={onChangeEmail}/>
            </label>
            <label htmlFor="phone">
                <input name="phone" value={valuePhone} onChange={onChangePhone}/>
            </label>
            <label htmlFor="subject">
                <input name="subject" value={valueSubject} onChange={onChangeSubject}/>
            </label>
            <label htmlFor="news">
                <input name="news" value={valueNews} onChange={onChangeNews}/>
            </label>
        </form>
    )
}

export default ContactForm;
