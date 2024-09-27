/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable prefer-template */
/* eslint-disable no-console */
import React, { useReducer } from 'react';
import { formData } from './formData';

function ContactForm() {
    const init = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        topic: '',
        message: '',

        firstNameIsValid: false,
        lastNameIsValid: false,
        emailIsValid: false,
        phoneNumberIsValid: false,
        topicIsValid: false,
        messageIsValid: false,

        isSubmitted: false,
    };

    const reducer = (state, action) => {
        const newState = { ...state };
        if (action && action.name && action.name.includes('isSubmitted')) {
            const { name } = action;
            newState[name] = true;
        } else if (action === 'clearInputs') {
            formData.forEach((field) => {
                newState[field.name] = '';
            });
            newState.isSubmitted = false;
        } else {
            const { name, value } = action;
            newState[name] = value;

            const filteredField = formData.filter((field) => field.name === name);

            filteredField.forEach((field) => {
                if (
                    (field.regExp ? value.match(field.regExp) : true) &&
                    (field.minimumLengthIsEqual ? value.length >= field.minimumLengthIsEqual : true)
                ) {
                    newState[name + 'IsValid'] = true;
                } else {
                    newState[name + 'IsValid'] = false;
                }
            });
        }
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, init);

    const { firstNameIsValid, lastNameIsValid, emailIsValid, topicIsValid, messageIsValid } = state;

    return (
        <form noValidate autoComplete="off">
            {formData.map((field) => {
                const { id, name, label, isRequired, errMessage } = field;

                return (
                    <div key={id}>
                        {label}
                        <input
                            name={name}
                            autoComplete="one-time-code"
                            onChange={(e) => dispatch(e.target)}
                            value={state[name]}
                        />
                        {state.isSubmitted && state[name + 'IsValid'] === false ? (
                            <p style={{ color: 'red' }}>{errMessage}</p>
                        ) : null}
                        {state.isSubmitted && isRequired && state[name] === '' ? (
                            <p style={{ color: 'red' }}>{label} Data required</p>
                        ) : null}
                    </div>
                );
            })}
            <input
                type="submit"
                name="isSubmitted"
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(e.target);

                    if (!firstNameIsValid) return;
                    if (!lastNameIsValid) return;
                    if (!emailIsValid) return;
                    if (!topicIsValid) return;
                    if (!messageIsValid) return;

                    alert('Send Data');

                    dispatch('clearInputs');
                }}
            />
        </form>
    );
}

export default ContactForm;
