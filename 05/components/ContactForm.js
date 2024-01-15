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
};

function ContactForm() {
    const [state, dispatch] = useReducer(reducer, initialFormState);

    const handleInput = (e) => {
        dispatch({ type: 'Handle input text', field: e.target.name, value: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        console.log(state);
    };

    const { username, email, phoneNumber, topic } = state;

    return (
        <Form
            onChange={handleInput}
            onSubmit={handleSubmit}
            data={state}
            fields={[
                {
                    type: 'text',
                    id: 'name',
                    name: 'username',
                    placeholder: 'Imię i Nazwisko',
                    value: username,
                },
                {
                    type: 'email',
                    id: 'email',
                    name: 'email',
                    placeholder: 'Email',
                    value: email,
                },
                {
                    type: 'number',
                    id: 'phoneNumber',
                    name: 'phoneNumber',
                    placeholder: 'Numer Telefonu',
                    value: phoneNumber,
                },
                {
                    type: 'text',
                    id: 'topic',
                    name: 'topic',
                    placeholder: 'Temat',
                    value: topic,
                },
            ]}
        />
    );
}

export default ContactForm;
