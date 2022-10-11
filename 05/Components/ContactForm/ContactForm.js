import React,{useReducer, useState} from 'react';

import inputFields from '../../helpers/InputFields';
import ContactFormErrorMessage from './ContactFormErrorMessage';


const ContactForm = () => {
    const initialState = { firstName: '', lastName: '', email: '', phoneNumber: '', topicOfMessage: '', message: '' };
    const inputReducer = (prevState, { name, value }) => ({...prevState, [name]: value });
    const [inputState, dispatchInput] = useReducer(inputReducer, initialState);

    const [isFormValid, setIsFormValid] = useState(false);
    const [formErrorMessage, setFormErrorMessage] = useState([]);

    const validationForm = (e) => {
        e.preventDefault();
        const errors = [];
        inputFields.forEach(({ isReq, name, pattern, errorType }) => {

            const inputValue = e.target.elements[name].value;
            const isPatternCorrect = pattern.test(inputValue);

            if (isReq) {
                if (!isPatternCorrect) {
                    errors.push(errorType);
                };
            };

        });

        if (errors.length !== 0) {
            setFormErrorMessage([errors]);
        } else {
            setIsFormValid(true);
        };

    };

    return (
        <form onSubmit={(e)=>validationForm(e)}>
            {inputFields.map(({ name, type, label, labelFieldName, id }) => (
                <label key={id} htmlFor={label} >{labelFieldName} <input name={name} type={type} id={name} onChange={(e)=>dispatchInput(e.target)} value={inputState[name]} /></label>
            ))}
            <button type='submit'>Submit</button>
            {isFormValid && <span>Form submitted!</span>}
            <ContactFormErrorMessage errors={formErrorMessage}/>
        </form>
    );
};

export default ContactForm;
