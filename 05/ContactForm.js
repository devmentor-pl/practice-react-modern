import React, { useReducer } from 'react';

const initialState = {
    values: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    },
    errors: {},
};

function formReducer(state, action) {
    switch (action.type) {
    case 'CHANGE_FIELD':
        return {
            ...state,
            values: {
                ...state.values,
                [action.field]: action.value,
                },
        };
    case 'SET_ERRORS':
        return {
            ...state,
            errors: action.errors,
            };
    case 'RESET_FORM':
        return initialState;

    default:
        return state;
    }
}
function validate(values) {
    const errors = {};

    if (!values.name.trim()) {
        errors.name = 'Imię i nazwisko jest wymagane';
    }

    if (!values.email.trim()) {
        errors.email = 'Adres e-mail jest wymagany';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Niepoprawny adres e-mail';
    }

    if (!values.subject.trim()) {
        errors.subject = 'Temat jest wymagany';
    }

    if (!values.message.trim()) {
        errors.message = 'Wiadomość jest wymagana';
    }

    return errors;
}
function ContactForm() {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const { values, errors } = state;

    /* Obsługa zmiany pola */
    const handleChange = (e) => {
        dispatch({
            type: 'CHANGE_FIELD',
            field: e.target.name,
            value: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate(values);

        if (Object.keys(validationErrors).length > 0) {
            dispatch({ type: 'SET_ERRORS', errors: validationErrors });
            return;
        }

        console.log('Dane formularza:', values);

        dispatch({ type: 'RESET_FORM' });
        alert('Formularz wysłany poprawnie!');
    };
    return (
        <form onSubmit={handleSubmit}>
            {success && <p style={{ color: 'green' }}>Formularz wysłany poprawnie</p>}

            <input
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Imię i nazwisko"
            />
            {errors.name && <p>{errors.name}</p>}

            <input name="email" value={values.email} onChange={handleChange} placeholder="Email" />
            {errors.email && <p>{errors.email}</p>}

            <button type="submit">Wyślij</button>
        </form>
    );
}

export default ContactForm;
