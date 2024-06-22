import React from 'react';
import { useReducer } from 'react';

const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
};

// Reducer do zarządzania stanem formularza
function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
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

const ContactForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dane formularza:', state);
        dispatch({ type: 'RESET_FORM' });
    };

    const handleChange = (e) => {
        dispatch({
            type: 'SET_FIELD',
            field: e.target.name,
            value: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Imię i nazwisko:</label>
                <input type="text" name="name" value={state.name} onChange={handleChange} />
            </div>
            <div>
                <label>Adres e-mail:</label>
                <input type="email" name="email" value={state.email} onChange={handleChange} />
            </div>
            <div>
                <label>Numer telefonu:</label>
                <input type="tel" name="phone" value={state.phone} onChange={handleChange} />
            </div>
            <div>
                <label>Temat:</label>
                <input type="text" name="subject" value={state.subject} onChange={handleChange} />
            </div>
            <div>
                <label>Wiadomość:</label>
                <textarea name="message" value={state.message} onChange={handleChange} />
            </div>
            <button type="submit">Wyślij</button>
        </form>
    );
};

export default ContactForm;
