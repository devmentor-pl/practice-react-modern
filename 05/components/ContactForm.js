/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';
import fields from '../helpers/fields';
import validator from '../helpers/validator';

const ContactForm = () => {
    const initValues = {
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        topic: '',
        message: '',
    };

    const reducer = (state, { name, value, type = '' }) => {
        if (type === 'reset') {
            return initValues;
        }
        return { ...state, [name]: value };
    };

    const [state, dispatch] = useReducer(reducer, initValues);

    const [info, setInfo] = useState('Fill in the form');
    const [errorsList, setErrorsList] = useState([]);

    const handleForm = (e) => {
        e.preventDefault();

        const errors = validator(state, fields);

        if (errors.length > 0) {
            // eslint-disable-next-line no-alert
            alert('Please check the form');
        } else {
            setInfo('Thank you for the message!');
            dispatch({ type: 'reset' });
        }

        setErrorsList(errors);
    };

    const fieldInputs = fields.map((field) => {
        const Tag = field.htmlTag;

        return (
            <label htmlFor={field.name} key={field.name}>
                {field.label}
                <Tag
                    name={field.name}
                    type={field.type}
                    value={state[field.name]}
                    onChange={(e) => dispatch(e.target)}
                />
            </label>
        );
    });

    return (
        <>
            <h2 className="form__header">{info}</h2>
            <form onSubmit={(e) => handleForm(e)}>
                {fieldInputs}
                <ul>
                    {errorsList.map((err) => (
                        <li key={uuid()}>{err}</li>
                    ))}
                </ul>
                <input type="submit" value="Send" />
            </form>
        </>
    );
};

export default ContactForm;
