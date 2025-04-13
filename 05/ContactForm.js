import React, { useReducer, useState } from 'react';

const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
};

function reducer(state, action) {
    switch (action.type) {
    case 'UPDATE_FIELD':
        return {
            ...state,
            [action.field]: action.value,
        };
    case 'RESET_FORM':
        return initialState;
    default:
        return state;
    }
}

function ContactForm() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
        if (!state.name) newErrors.name = 'Imię i nazwisko jest wymagane.';
        if (!state.email) newErrors.email = 'Adres e-mail jest wymagany.';
        if (!state.subject) newErrors.subject = 'Temat jest wymagany.';
        if (!state.message) newErrors.message = 'Wiadomość jest wymagana.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_FIELD', field: name, value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (validate()) {
            console.log('Formularz został wysłany:', state);
            dispatch({ type: 'RESET_FORM' });
        }
    }
    const styles = {
        form: {
            maxWidth: '500px',
            margin: '0 auto',
            padding: '30px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        label: {
            display: 'block',
            marginBottom: '10px',
            fontWeight: 'bold',
        },
        input: {
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
        },
        textarea: {
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            resize: 'vertical',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
        },
        error: {
            color: 'red',
            fontSize: '14px',
            marginTop: '-10px',
            marginBottom: '10px',
        },
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <label htmlFor="name" style={styles.label}>
                Imię i nazwisko:
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    style={styles.input}
                />
                {errors.name && <p style={styles.error}>{errors.name}</p>}
            </label>
            <label htmlFor="email" style={styles.label}>
                Adres e-mail:
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    style={styles.input}
                />
                {errors.email && <p style={styles.error}>{errors.email}</p>}
            </label>
            <label htmlFor="phone" style={styles.label}>
                Numer telefonu:
                <input
                    type="tel"
                    name="phone"
                    value={state.phone}
                    onChange={handleChange}
                    style={styles.input}
                />
            </label>
            <label htmlFor="subject" style={styles.label}>
                Temat:
                <input
                    type="text"
                    name="subject"
                    value={state.subject}
                    onChange={handleChange}
                    style={styles.input}
                />
                {errors.subject && <p style={styles.error}>{errors.subject}</p>}
            </label>
            <label htmlFor="message" style={styles.label}>
                Wiadomość:
                <textarea
                    name="message"
                    value={state.message}
                    onChange={handleChange}
                    style={styles.textarea}
                />
                {errors.message && <p style={styles.error}>{errors.message}</p>}
            </label>
            <button type="submit" style={styles.button}>
                Wyślij
            </button>
        </form>
    );
}

export default ContactForm;
