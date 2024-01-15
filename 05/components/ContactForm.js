import React, { useReducer } from 'react';
import reducer from '../reducers/reducer';
import Form from './Form';
// import account from './account';

const initialFormState = {
    username: '',
    email: '',
    phoneNumber: '',
    topic: '',
    message: '',
    errors: [],
};

function ContactForm() {
    const [state, dispatch] = useReducer(reducer, initialFormState);

    const handleInput = (e) => {
        dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
    };

    const onSubmit = (data) => {
        // eslint-disable-next-line
        console.log('submitted', data);
    };

    const { username, email, phoneNumber, topic } = state;

    return (
        <Form
            onChange={handleInput}
            onSubmit={onSubmit}
            data={state}
            fields={[
                {
                    type: 'text',
                    id: 'name',
                    name: 'username',
                    placeholder: 'Imię i Nazwisko',
                    value: username,
                    pattern: /^[a-zA-Z]+ [a-zA-Z]+$/,
                    message: 'Proszę podaj Imię i Nazwisko',
                },
                {
                    type: 'email',
                    id: 'email',
                    name: 'email',
                    placeholder: 'Email',
                    value: email,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                    message: 'Proszę podaj poprawny email',
                },
                {
                    type: 'number',
                    id: 'phoneNumber',
                    name: 'phoneNumber',
                    placeholder: 'Numer Telefonu',
                    value: phoneNumber,
                    pattern: /^\d{8,}$/,
                    message: 'Numer telefonu musi zawierać minimum 8 cyfr',
                },
                {
                    type: 'text',
                    id: 'topic',
                    name: 'topic',
                    placeholder: 'Temat',
                    value: topic,
                    pattern: /^.{10,}$/,
                    message: 'Pole temat musi zawierać minimum 10 znaków',
                },
            ]}
        />
    );
}

export default ContactForm;
