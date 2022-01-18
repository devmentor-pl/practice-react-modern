import React, { useState, useEffect } from 'react';
import ContactFormValidation from './ContactFormValidation';
import fields from './tools/fieldsObj';
// import account from './account/account';

function ContactForm() {
    const validation = new ContactFormValidation();
    let errors = {};
    let errorsCounter = 0;
    const init = {
        userName: '',
        userEmail: '',
        userPhone: '',
        userSubject: '',
        userMessage: '',
    };
    const [inputValue, setInputValue] = useState(init);
    const [newErrors, setErrors] = useState(errors);

    const handleInputs = (curr) => {
        const { name, value } = curr;
        // console.log(name, '|', value);
        // console.log(curr.name, '|', curr.value);
        setInputValue({ ...inputValue, [name]: value });
    };

    const validateInputs = (e) => {
        [errors, errorsCounter] = validation.run(fields, inputValue);
        // console.log(errors);
        setErrors(newErrors);
        // console.log(errors, '|', newErrors);

        if (errorsCounter > 0) {
            setErrors(errors);
            console.log(newErrors);
            e.preventDefault();
            // console.log(errors);
        }
    };

    // useEffect(() => {
    // console.log('test');
    // }, [errors]);

    return (
        <div>
            <form onSubmit={validateInputs} onChange={(e) => handleInputs(e.target)}>
                {fields.map((el) => {
                    const { type, name, value, placeholder } = el;
                    console.log(errors);
                    return (
                        <div>
                            <input
                                type={type}
                                name={name}
                                value={value}
                                placeholder={placeholder}
                                autoComplete="off"
                                formNoValidate
                            />
                            <span>
                                {errors[name] && errors[name].length > 0
                                    ? errors[name].map((i) => <li>{i}</li>)
                                    : 'Test'}
                            </span>
                        </div>
                    );
                })}
                <input type="submit" />
            </form>
        </div>
    );
}

export default ContactForm;

// const reducer = (state, { name, value }) => {
//     const newState = { ...state };
//     newState[name] = value;
//     return newState;
// };

// const [state, dispatch] = useReducer(reducer, init);
