import React, { useReducer, useState } from 'react';

// import account from './account';

const validationConfig = {
    firstName: {
        required: true,
        errorMessage: 'First name is required',
        placeholder: 'First name',
        type: 'text',
    },
    lastName: {
        required: true,
        errorMessage: 'Last name is required',
        placeholder: 'Last name',
        type: 'text',
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMessage: 'Invalid email address',
        placeholder: 'Email',
        type: 'email',
    },
    number: {
        errorMessage: 'Invalid email address',
        placeholder: 'Phone number',
        type: 'number',
    },
    topic: {
        required: true,
        errorMessage: 'Topic is required',
        placeholder: 'Topic',
        type: 'text',
    },
    msg: {
        required: true,
        errorMessage: 'Message is required',
        placeholder: 'Message',
        type: 'text',
    },
};

function ContactForm() {
    const init = { firstName: '', lastName: '', email: '', number: '', topic: '', msg: '' };

    const reducer = function fn(state, { name, value }) {
        return { ...state, [name]: value };
    };

    const [values, dispatch] = useReducer(reducer, init);

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        Object.entries(validationConfig).forEach(([fieldName, config]) => {
            const { required, pattern, errorMessage } = config;
            const value = values[fieldName].trim();

            if (required && !value) {
                newErrors[fieldName] = errorMessage;
            } else if (pattern && !pattern.test(value)) {
                newErrors[fieldName] = errorMessage;
            }
        });

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', values);
        } else {
            console.log('Something went wrong');
        }
    };

    // console.log(account);
    return (
        <form noValidate onSubmit={handleSubmit}>
            {Object.entries(validationConfig).map(([fieldName, config]) => (
                <div key={fieldName}>
                    <input
                        name={fieldName}
                        value={values[fieldName]}
                        placeholder={config.placeholder}
                        type={config.type}
                        style={{ display: 'block' }}
                        required={config.required}
                        onChange={(e) => dispatch(e.target)}
                    />
                    {errors[fieldName] && (
                        <p style={{ color: 'red', margin: '0 0 5px 0' }}>{errors[fieldName]}</p>
                    )}
                </div>
            ))}
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;
