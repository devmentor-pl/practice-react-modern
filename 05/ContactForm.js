import React, { useReducer } from 'react';

// import account from './account';
import { UPDATE_FORM, onInputChange, onFocusOut } from './lib/formUtils';

const ContactForm = () => {
    const initialState = {
        name: { value: '', touched: false, hasError: true, error: '' },
        email: { value: '', touched: false, hasError: true, error: '' },
        phoneNumber: { value: '', touched: false, hasError: true, error: '' },
        subject: { value: '', touched: false, hasError: true, error: '' },
        message: { value: '', touched: false, hasError: true, error: '' },
        isFormValid: false,
    };

    const formsReducer = (state, action) => {
        switch (action.type) {
            case UPDATE_FORM:
                const { name, value, hasError, error, touched, isFormValid } = action.data;
                return {
                    ...state,
                    [name]: { ...state[name], value, hasError, error, touched },
                    isFormValid,
                };
            default:
                return state;
        }
    };

    const [formState, dispatch] = useReducer(formsReducer, initialState);

    // console.log(account);
    return (
        <form>
            <div>
                <input
                    name="name"
                    value={formState.name.value}
                    onChange={e => {
                        onInputChange('name', e.target.value, dispatch, formState);
                    }}
                    onBlur={e => {
                        onFocusOut('name', e.target.value, dispatch, formState);
                    }}
                />
                {formState.name.touched && formState.name.hasError && (
                    <div
                        style={{
                            color: 'red',
                            marginTop: '0.25rem',
                        }}
                    >
                        {formState.name.error}
                    </div>
                )}
            </div>
            <div>
                <input
                    name="email"
                    value={formState.email.value}
                    onChange={e => {
                        onInputChange('email', e.target.value, dispatch, formState);
                    }}
                    onBlur={e => {
                        onFocusOut('email', e.target.value, dispatch, formState);
                    }}
                />
                {formState.email.touched && formState.email.hasError && (
                    <div
                        style={{
                            color: 'red',
                            marginTop: '0.25rem',
                        }}
                    >
                        {formState.email.error}
                    </div>
                )}
            </div>
            <div>
                <input
                    name="phone-number"
                    value={formState.phoneNumber.value}
                    onChange={e => {
                        onInputChange('phone-number', e.target.value, dispatch, formState);
                    }}
                    onBlur={e => {
                        onFocusOut('phone-number', e.target.value, dispatch, formState);
                    }}
                />
                {formState.phoneNumber.touched && formState.phoneNumber.hasError && (
                    <div
                        style={{
                            color: 'red',
                            marginTop: '0.25rem',
                        }}
                    >
                        {formState.phoneNumber.error}
                    </div>
                )}
            </div>
            <div>
                <input
                    name="subject"
                    value={formState.subject.value}
                    onChange={e => {
                        onInputChange('subject', e.target.value, dispatch, formState);
                    }}
                    onBlur={e => {
                        onFocusOut('subject', e.target.value, dispatch, formState);
                    }}
                />
                {formState.subject.touched && formState.subject.hasError && (
                    <div
                        style={{
                            color: 'red',
                            marginTop: '0.25rem',
                        }}
                    >
                        {formState.subject.error}
                    </div>
                )}
            </div>
            <div>
                <input
                    name="message"
                    value={formState.message.value}
                    onChange={e => {
                        onInputChange('message', e.target.value, dispatch, formState);
                    }}
                    onBlur={e => {
                        onFocusOut('message', e.target.value, dispatch, formState);
                    }}
                />
                {formState.message.touched && formState.message.hasError && (
                    <div
                        style={{
                            color: 'red',
                            marginTop: '0.25rem',
                        }}
                    >
                        {formState.message.error}
                    </div>
                )}
            </div>
        </form>
    );
};

export default ContactForm;
