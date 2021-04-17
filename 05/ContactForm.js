import React, { useReducer } from 'react';


const ContactForm = () => {

    const init = { firstName: '', lastName: '', email: '', tel: '', date: '', time: '', comment: '' };

    const reducer = (state, {name, value}) => {
        return { ...state, [name]: value};
    }

    const [state, dispatch] = useReducer(reducer, init);
    const { firstName, lastName, email, tel, date, time, comment } = state;


    const validationPhoneNumber = () => {
        const reg = /([0-9]{3})-([0-9]{3})-([0-9]{3})/;
        return reg.test(tel)
    }

    const validationData = () => {
        const reg = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
        return reg.test(date)
    }

    const validationTime = () => {
        const reg = /([0-9]{2}):([0-9]{2})/;
        return reg.test(time)
    }

    const validationForm = (errors) => {
        if (firstName.length === 0 || firstName.length <= 1) {
            errors.push('Field firstname is required! \n');
        }
        if (lastName.length === 0 || lastName.length <= 1) {
            errors.push('Field lastname is required! \n');
        }
        if (!email.includes('@')) {
            errors.push('Email need @ sign! \n');
        }
        if (!validationPhoneNumber()) {
            errors.push('Phone number is incorrect! (Write e.g 500-500-500) \n');
        }
        if (!validationData()) {
            errors.push('Date is incorrect! \n');
        }
        if (!validationTime()) {
            errors.push('Time is incorrect! \n');
        }
        if (comment.length === 0 || comment.length <= 1) {
            errors.push('Field comment is required! \n');
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        const errors = [];
        validationForm(errors);

        if (errors.length > 0) {
            window.alert(errors)
        } else {
            window.alert('Dane zostały poprawnie wprowadzone i wysłane !!!')
        }
    }

    return(
        <section onSubmit={handleSubmit}>
            <h1>ContactForm</h1>
            <form noValidate>
                <input name="firstName" value={firstName} type="text" onChange={ e => dispatch(e.target)} placeholder="Name" required />
                <input name="lastName" value={lastName} type="text" onChange={ e => dispatch(e.target)} placeholder="LastName" required />
                <input name="email" value={email} type="email" onChange={ e => dispatch(e.target)} placeholder="Email" required />
                <input name="tel" value={tel} type="tel" onChange={ e => dispatch(e.target)} placeholder="phone" />
                <input name="date" value={date} type="date" onChange={ e => dispatch(e.target)} />
                <input name="time" value={time} type="time" onChange={ e => dispatch(e.target)} />

                <input type="submit" value="Send" />
            </form>
            <textarea name="comment" value={comment} onChange={ e => dispatch(e.target)} required />
        </section>
    )
};

export default ContactForm;
