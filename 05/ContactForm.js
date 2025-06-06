import React, { useReducer, useState } from 'react';

// import account from './account';

const initialState = {
    nameAndLastname: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
};

const reducer = (state, { name, value }) => ({
    ...state,
    [name]: value,
});
function ContactForm() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [error, setError] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!state.nameAndLastname) {
            newErrors.nameAndLastname = 'Imię i nazwisko jest wymagane.';
        }
        if (!state.email) {
            newErrors.email = 'Email jest wymagany.';
        }
        if (!state.subject) {
            newErrors.subject = 'Temat jest wymagany.';
        }
        if (!state.message) {
            newErrors.message = 'Treść wiadomości jest wymagana.';
        }
        setError(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // alert('Formularz został wysłany.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nameAndLastname">
                Imię i nazwisko
                <br />
                <input
                    type="text"
                    name="nameAndLastname"
                    id="nameAndLastname"
                    value={state.nameAndLastname}
                    onChange={(e) => dispatch(e.target)}
                />
            </label>
            {error.nameAndLastname && <p style={{ color: 'red' }}>{error.nameAndLastname}</p>}
            <label
                htmlFor="email"
                style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
            >
                Adres e-mail
                <br />{' '}
                <input
                    name="email"
                    id="email"
                    value={state.email}
                    onChange={(e) => dispatch(e.target)}
                />
            </label>
            {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
            <label
                htmlFor="phoneNumber"
                style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
            >
                Numer telefonu
                <br />{' '}
                <input
                    name="phoneNumber"
                    id="phoneNumber"
                    value={state.phoneNumber}
                    onChange={(e) => dispatch(e.target)}
                />
            </label>
            <label
                htmlFor="subject"
                style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
            >
                Temat
                <br />{' '}
                <input
                    name="subject"
                    id="subject"
                    value={state.subject}
                    onChange={(e) => dispatch(e.target)}
                />
            </label>{' '}
            {error.subject && <p style={{ color: 'red' }}>{error.subject}</p>}
            <label
                htmlFor="message"
                style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
            >
                Wiadomość
                <br />
                <textarea
                    name="message"
                    id="message"
                    value={state.message}
                    onChange={(e) => dispatch(e.target)}
                />
            </label>{' '}
            {error.message && <p style={{ color: 'red' }}>{error.message}</p>}
            <button type="submit">Wyślij</button>
        </form>
    );
}

export default ContactForm;
