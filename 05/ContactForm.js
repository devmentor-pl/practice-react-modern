import React, { useReducer } from 'react';

// import account from './account';
import { UPDATE_FORM, onInputChange, onFocusOut, validateInput } from './lib/formUtils';

const ContactForm = () => {
    // const [, setShowError] = useState(false);

    const initialState = {
        name: { value: '', touched: false, hasError: true, error: '' },
        email: { value: '', touched: false, hasError: true, error: '' },
        phoneNumber: { value: '', touched: false, hasError: true, error: '' },
        subject: { value: '', touched: false, hasError: true, error: '' },
        message: { value: '', touched: false, hasError: true, error: '' },
        isFormValid: false,
    };

    const formsReducer = (state, action) => {
        const { name, value, hasError, error, touched, isFormValid } = action.data;

        switch (action.type) {
            case UPDATE_FORM:
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

    const formSubmitHandler = e => {
        e.preventDefault();
        let isFormValid = true;

        // eslint-disable-next-line no-restricted-syntax
        const keys = Object.keys(formState);
        const values = Object.values(formState);
        for (let i = 0; i < keys.length; i += 1) {
            if (Object.prototype.hasOwnProperty.call(formState, keys[i])) {
                const item = formState[keys[i]];
                const name = keys[i];
                const { value } = item;
                const { hasError, error } = validateInput(keys[i], value);
                if (hasError) {
                    isFormValid = false;
                }
                if (keys[i]) {
                    dispatch({
                        type: UPDATE_FORM,
                        data: {
                            name,
                            value,
                            hasError,
                            error,
                            touched: true,
                            isFormValid,
                        },
                    });
                }
            }
        }
        // for (const name in formState) {
            
        // }

        // if (!isFormValid) {
        //     setShowError(true);
        // } else {
        //     window.location.reload(false);
        // }

        if (isFormValid) {
            window.location.reload(false)
        }

        // setTimeout(() => {
        //     setShowError(false);
        // }, 5000);
    };

    // console.log(account);
    return (
        <div
            style={{
                maxWidth: '300px',
                margin: '1rem auto',
            }}
        >
            <form onSubmit={e => formSubmitHandler(e)}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '0.5rem',
                    }}
                >
                    <label htmlFor="name">
                        Name:
                        <input
                            style={{
                                fontSize: '1.1rem',
                            }}
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
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        {' '}
                        Email:
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
                    </label>
                </div>
                <div>
                    <label htmlFor="phoneNumber">
                        {' '}
                        Phone Number:
                        <input
                            name="phoneNumber"
                            value={formState.phoneNumber.value}
                            onChange={e => {
                                onInputChange('phoneNumber', e.target.value, dispatch, formState);
                            }}
                            onBlur={e => {
                                onFocusOut('phoneNumber', e.target.value, dispatch, formState);
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
                    </label>
                </div>
                <div>
                    <label htmlFor="subject">
                        {' '}
                        Subject:
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
                    </label>
                </div>
                <div>
                    <label htmlFor="message">
                        Message:
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
                    </label>
                </div>
                <div className="input_wrapper">
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
