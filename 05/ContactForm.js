import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { serviceID, templateID, userID } from './account';

// import account from './account';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, e.target, userID).then(
            (result) => {
                // eslint-disable-next-line no-console
                console.log(result.text);
            },
            (error) => {
                // eslint-disable-next-line no-console
                console.log(error.text);
            },
        );
        e.target.reset();
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="name" required />
            <input type="email" name="user_email" placeholder="email" required />
            <input type="number" name="user_phone" placeholder="phone number" />
            <input type="text" name="subject" placeholder="subject" required />
            <textarea name="message" placeholder="message" required />
            <input type="submit" name="message" />
        </form>
    );
}

export default ContactForm;
