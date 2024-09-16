import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import findInputElementsInForm from './helpers';
import validate from './validation/validate';
import FORM_INPUTS from './validation/formInputs';
// import emailProvider from './emailProvider';
// import * as account from './account';

const init = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    content: '',
};

// const reducer = (state, { name, value }) => ({ ...state, [name]: value });
// prettier-ignore
const reducer = (state, action) => {
    switch (action.type) {
    case 'change':
        return { ...state, [action.name]: action.value };
    case 'reset':
        return init;
    default:
        return state;
    }
};

function ContactForm({ formInputs }) {
    const [state, dispatch] = useReducer(reducer, init);
    const [errors, setErrors] = useState({});

    function liveValidation(input) {
        const inputName = input.name;
        const isErrorInArray = errors[inputName];
        if (!isErrorInArray) return;
        const inputError = validate(FORM_INPUTS, [input]);
        const isErrorObjEmpty = Object.keys(inputError).length === 0;
        if (isErrorObjEmpty) {
            const { [inputName]: omittedKey, ...rest } = errors;
            setErrors(rest);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({ type: 'change', name, value });
        liveValidation(e.target);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const inputs = findInputElementsInForm(form);
        const formErrors = validate(FORM_INPUTS, inputs);
        setErrors(formErrors);

        const isFormDirty = Object.keys(errors).length !== 0;
        const isFormErrorsDirty = Object.keys(formErrors).length !== 0;

        if (isFormDirty || isFormErrorsDirty) return;

        console.log('wysłano formularz', state);

        // const data = {
        //     service_id: account.SERVICE_ID,
        //     template_id: account.TEMPLATE_ID,
        //     user_id: account.PUBLIC_KEY,
        //     template_params: state,
        // };

        dispatch({ type: 'reset' });
        form.reset();

        // emailProvider
        //     .add(data)
        //     .then((resp) => console.log(resp))
        //     .catch((err) => console.error(err))
        //     .finally(() => {
        //         dispatch({ type: 'reset' });
        //         form.reset();
        //     });
    }

    function renderInputs(fields) {
        const inputs = fields.map((input) => {
            const { name, label, type } = input;

            let inputEl;
            if (type === 'textarea') {
                inputEl = (
                    <textarea
                        onChange={handleChange}
                        name={name}
                        id={name}
                        type={type}
                        value={state[name]}
                    />
                );
            } else {
                inputEl = (
                    <input
                        onChange={handleChange}
                        name={name}
                        id={name}
                        type={type}
                        value={state[name]}
                    />
                );
            }

            const renderError = errors[name] ? errors[name] : '';
            const errorStyle = {
                fontSize: '0.75rem',
                color: 'orangered',
            };

            return (
                <div key={name}>
                    <label htmlFor={name}>{label}</label>
                    {inputEl}
                    <div className="input__error" style={errorStyle}>
                        {renderError}
                    </div>
                </div>
            );
        });

        return inputs;
    }

    return (
        <form onSubmit={handleSubmit}>
            {renderInputs(formInputs)}
            <input type="submit" value="send" />
        </form>
    );
}

ContactForm.propTypes = {
    formInputs: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            required: PropTypes.bool,
            pattern: PropTypes.string,
            type: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default ContactForm;
