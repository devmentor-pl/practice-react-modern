import React, { useReducer, useState, useRef } from 'react';
import fields from './fields';
import SendEmail from './SendEmail';
import checkValidation from './Validation';

function ContactForm() {
    const init = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
    };
    const form = useRef();
    const reducer = (state, { name, value }) => ({ ...state, [name]: value });
    const [state, dispatch] = useReducer(reducer, init);
    const [errors, setErrors] = useState('');
    const styleForm = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
    const styleLabel = {
        margin: '5px',
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const wrongValues = checkValidation(state);
        setErrors(wrongValues);
        if (wrongValues.length === 0) {
            // eslint-disable-next-line no-console
            console.log('Form is OK');
            setErrors(...wrongValues);
            SendEmail(form);
        }
    };

    return (
        <form ref={form} style={styleForm} onSubmit={handleSubmit}>
            {fields.map(({ name, type, label }) => {
                if (type === 'textarea') {
                    return (
                        // eslint-disable-next-line jsx-a11y/label-has-associated-control
                        <label style={styleLabel} key={name}>
                            {label}
                            <textarea
                                onChange={(e) => dispatch(e.target)}
                                name={name}
                                value={state[name]}
                                type={type}
                            />
                        </label>
                    );
                }
                return (
                    // eslint-disable-next-line jsx-a11y/label-has-associated-control
                    <label style={styleLabel} key={name}>
                        {label}
                        <input
                            onChange={(e) => dispatch(e.target)}
                            name={name}
                            value={state[name]}
                            type={type}
                        />
                    </label>
                );
            })}
            <div>{errors}</div>
            <input type="submit" value="Send" />
        </form>
    );
}
export default ContactForm;
