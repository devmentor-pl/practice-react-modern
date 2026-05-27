import React, { useReducer } from 'react';
import emailjs from '@emailjs/browser';

import fields from './formData';
import initialState from './formInitialState';
import reducer from './formReducer';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from './account';

function ContactForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hasErrors = Object.values(state.errors).some((err) => err !== '');

        const hasEmptyRequired = fields.some(
            (field) => field.isRequired && state.values[field.name] === '',
        );

        if (hasErrors || hasEmptyRequired) {
            dispatch({ type: 'VALIDATE_ALL' });
            return;
        }

        try {
            const { status, text } = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                state.values,
                PUBLIC_KEY,
            );

            if (status !== 200) {
                throw new Error(`Błąd wysyłania: ${text}`)
            }

            // eslint-disable-next-line no-console
            console.log('Wiadomość wysłana: ', text);
            dispatch({ type: 'RESET' });
            
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Błąd wysyłania', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            {fields.map((field) => (
                <div key={field.name}>
                    <label htmlFor={field.name}>
                        {field.label}
                        {field.isRequired && <span style={{ color: 'red' }}> *</span>}
                    </label>

                    {field.type === 'textarea' ? (
                        <textarea
                            id={field.name}
                            name={field.name}
                            value={state.values[field.name]}
                            onChange={(e) =>
                                dispatch({
                                    type: 'CHANGE',
                                    name: field.name,
                                    value: e.target.value,
                                })
                            }
                            onBlur={() =>
                                dispatch({
                                    type: 'BLUR',
                                    name: field.name,
                                })
                            }
                            minLength={field.minLength}
                            maxLength={field.maxLength}
                            rows={4}
                            cols={40}
                            required={field.isRequired}
                        />
                    ) : (
                        <input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            value={state.values[field.name]}
                            onChange={(e) =>
                                dispatch({
                                    type: 'CHANGE',
                                    name: field.name,
                                    value: e.target.value,
                                })
                            }
                            onBlur={() =>
                                dispatch({
                                    type: 'BLUR',
                                    name: field.name,
                                })
                            }
                            required={field.isRequired}
                        />
                    )}

                    {state.touched[field.name] && state.errors[field.name] && (
                        <p style={{ color: 'red' }}>{state.errors[field.name]}</p>
                    )}
                </div>
            ))}

            <p>
                <span style={{ color: 'red' }}>*</span> pola obowiązkowe
            </p>

            <div>
                <input type="submit" value="Wyślij" />
            </div>
        </form>
    );
}

export default ContactForm;
