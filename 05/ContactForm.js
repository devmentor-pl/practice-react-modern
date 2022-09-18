import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import validateForm from './formValidation';

const ContactForm = function ContactForm(props) {
    const { fieldsList } = props;

    const init = {};
    fieldsList.forEach(({ name, defaultValue }) => {
        init[name] = defaultValue;
    });

    const reducer = (state, { key, value }) => {
        return { ...state, [key]: value };
    };

    const [state, dispatch] = useReducer(reducer, init);
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        setErrors(validateForm(fieldsList, state));
    }

    function renderFieldsList() {
        return fieldsList.map((field) => {
            return (
                <div key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <div>
                        {field.type === 'textarea' ? (
                            <textarea
                                key={field.name}
                                name={field.name}
                                value={state[field.name]}
                                onChange={(e) => {
                                    dispatch({ key: field.name, value: e.target.value });
                                }}
                            />
                        ) : (
                            <input
                                key={field.name}
                                name={field.name}
                                value={state[field.name]}
                                onChange={(e) => {
                                    dispatch({ key: field.name, value: e.target.value });
                                }}
                            />
                        )}
                        {errors.map((error) => {
                            return error && error.field.name === field.name ? (
                                <p
                                    key={`${error.field.name}: ${error.text}`}
                                    style={{ color: 'red' }}
                                >
                                    {error.text}
                                </p>
                            ) : (
                                ''
                            );
                        })}
                    </div>
                </div>
            );
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            {renderFieldsList()}
            <input type="submit" />
        </form>
    );
};

ContactForm.propTypes = {
    fieldsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactForm;
