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

    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, initValues);

    const [info, setInfo] = useState('Fill the form');

    const handleForm = (e) => {
        e.preventDefault();

        const errors = validator(state, fields);

        if (errors.length > 0) {
            // eslint-disable-next-line no-alert
            alert('Check the form');
        } else {
            setInfo('You did a great job!');
        }
    };

    const fieldInputs = fields.map((field) => {
        const Tag = field.htmlTag;

        return (
            <label htmlFor={field.name} key={uuid()}>
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
            <p>{info}</p>
            <form onSubmit={(e) => handleForm(e)}>
                {fieldInputs}
                <input type="submit" value="Send" />
            </form>
        </>
    );

    // eslint-disable-next-line
    console.log(fields);
};

export default ContactForm;
