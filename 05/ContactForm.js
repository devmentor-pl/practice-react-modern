import React, { useReducer, useState } from 'react';
import { UPDATE_FORM, handleChange, loopFormState, onFocusOut, clearForm } from './formHandler';
import validate from './ValidationRules';

const FormWrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    flexDirection: 'column'
};

const FormStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    margin: '2rem'
};

const InputContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '500px'
};

const InputStyles = {
    marginBottom: '0.3rem'
};

const ErrorMsgStyles = {
    fontSize: '0.8rem',
    color: 'red'
};

const ErrorSubmitStyles = {
    color: 'red',
    border: '1px solid red',
    padding: '0.5rem'
};

const ContactForm = () => {
    const init = {
        fullName: {
            value: '',
            touched: false,
            hasError: true,
            error: '',
            label: 'Name and surname'
        },
        email: { value: '', touched: false, hasError: true, error: '', label: 'Email' },
        phone: { value: '', touched: false, hasError: true, error: '', label: 'Mobile' },
        title: { value: '', touched: false, hasError: true, error: '', label: 'Title' },
        message: { value: '', touched: false, hasError: true, error: '', label: 'Message' },
        isFormValid: false
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case UPDATE_FORM:
                const { name, value, hasError, error, touched, isFormValid } = action.data;
                return {
                    ...state,
                    [name]: { ...state[name], value, hasError, error, touched, isFormValid }
                };
            default:
                return state;
        }
    };

    const [formState, dispatch] = useReducer(reducer, init);

    const [showError, setShowError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        let isFormValid = true;

        for (const name in formState) {
            const item = formState[name];
            const { value } = item;
            const { hasError, error } = validate(name, value);
            if (hasError) {
                isFormValid = false;
            }
            if (name) {
                dispatch({
                    type: 'UPDATE_FORM',
                    data: {
                        name,
                        value,
                        hasError,
                        error,
                        touched: true,
                        isFormValid
                    }
                });
            }
        }
        if (!isFormValid) {
            setShowError(true);
        } else {
            alert('Message sent!');
            const keys = Object.keys(init);
            keys.forEach((key, i) => {
                if (key !== 'isFormValid') {
                    clearForm(key, dispatch);
                } else return;
            });
            isFormValid = false;
            setShowError(false);
        }
    };

    const renderFields = () => {
        return Object.entries(init).map(([key, value]) => {
            if (key === 'isFormValid') {
                return null;
            }
            return (
                <div style={InputContainerStyles} key={key}>
                    <label htmlFor={key}>{value.label}</label>
                    <input
                        type="text"
                        name={key}
                        id={key}
                        value={formState[key].value}
                        onChange={e => handleChange(key, e.target.value, dispatch, formState)}
                        onBlur={e => {
                            onFocusOut(key, e.target.value, dispatch, formState);
                        }}
                        style={InputStyles}
                    />
                    {formState[key].touched && formState[key].hasError && (
                        <div style={ErrorMsgStyles}>{formState[key].error}</div>
                    )}
                </div>
            );
        });
    };

    return (
        <div style={FormWrapperStyles}>
            {showError && formState.isFormValid && (
                <div style={ErrorSubmitStyles}>Please fill all the fields correctly</div>
            )}
            <form style={FormStyles} onSubmit={e => handleSubmit(e)}>
                {renderFields()}
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm;
