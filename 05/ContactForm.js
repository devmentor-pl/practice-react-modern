import React, { useReducer } from 'react';
import useErrors from './hook';

const ContactForm = () => {
    const init = {
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        date: '',
        time: '',
        comment: '',
    };

    const reducer = (state, { name, value }) => {
        return { ...state, [name]: value };
    };

    const [state, dispatch] = useReducer(reducer, init);
    const { firstName, lastName, email, tel, date, time, comment } = state;

    const [validationForm] = useErrors(state);

    const handleSubmit = e => {
        e.preventDefault();

        const errors = validationForm();

        if (errors.length > 0) {
            window.alert(errors.join(',  '));
        } else {
            window.alert('Dane zostały poprawnie wprowadzone i wysłane !!!');
        }
    };

    return (
        <section onSubmit={handleSubmit}>
            <h1>ContactForm</h1>
            <form noValidate>
                <input
                    name="firstName"
                    value={firstName}
                    type="text"
                    onChange={e => dispatch(e.target)}
                    placeholder="Name"
                    required
                />
                <input
                    name="lastName"
                    value={lastName}
                    type="text"
                    onChange={e => dispatch(e.target)}
                    placeholder="LastName"
                    required
                />
                <input
                    name="email"
                    value={email}
                    type="email"
                    onChange={e => dispatch(e.target)}
                    placeholder="Email"
                    required
                />
                <input
                    name="tel"
                    value={tel}
                    type="tel"
                    onChange={e => dispatch(e.target)}
                    placeholder="phone"
                />
                <input name="date" value={date} type="date" onChange={e => dispatch(e.target)} />
                <input name="time" value={time} type="time" onChange={e => dispatch(e.target)} />

                <input type="submit" value="Send" />
            </form>
            <textarea name="comment" value={comment} onChange={e => dispatch(e.target)} required />
        </section>
    );
};

export default ContactForm;
