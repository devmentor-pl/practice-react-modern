import React, { useReducer, useState } from 'react';

const ContactForm = function ContactForm() {
    const inputList = [
        { name: 'name', type: 'text', default: '', validation: { isRequired: true } },
        {
            name: 'email',
            type: 'email',
            default: '',
            validation: { isRequired: true, regex: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ },
        },
        {
            name: 'phone',
            type: 'text',
            default: '',
            validation: { isRequired: true, regex: /^[0-9]+$/ },
        },
        { name: 'subject', type: 'text', default: '', validation: { isRequired: true } },
        { name: 'message', type: 'textarea', default: '', validation: { isRequired: true } },
    ];

    const init = {};
    inputList.forEach((item) => {
        init[item.name] = item.default;
    });

    function validateForm(data, values) {
        const errors = [];
        data.forEach((field) => {
            const value = values[field.name];

            if (field.validation.isRequired && value === '') {
                errors.push({ message: `Field is required, ${field.name}`, field: field.name });
            }

            if (field.validation.regex && !field.validation.regex.test(value)) {
                errors.push({ message: `Field is incorrect, ${field.name}`, field: field.name });
            }
        });
        return errors;
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'change': {
                return { ...state, [action.item]: action.value };
            }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    const [errors, setErrors] = useState([]);

    function renderInputList() {
        return inputList.map((item) => {
            let field;
            if (item.type === 'textarea') {
                field = (
                    <textarea
                        onChange={(e) => dispatch({ type: 'change', item: item.name, value: e.target.value })}
                        name={item.name}
                        type={item.type}
                        id={item.name}
                        value={state[item.name]}
                    />
                );
            } else {
                field = (
                    <input
                        onChange={(e) => dispatch({ type: 'change', item: item.name, value: e.target.value })}
                        name={item.name}
                        type={item.type}
                        id={item.name}
                        value={state[item.name]}
                    />
                );
            }

            return (
                <div key={item.name}>
                    <label htmlFor={item.name}>{item.name}</label>
                    {field}
                </div>
            );
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrors(validateForm(inputList, state));
    }

    function renderErrors() {
        return errors.length > 0 ? (
            <ul>
                {errors.map((error) => (
                    <li key={`${error.field}-${error.message}`}>{error.message}</li>
                ))}
            </ul>
        ) : null;
    }

    return (
        <form onSubmit={handleSubmit}>
            {renderErrors()}
            {renderInputList()}
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
