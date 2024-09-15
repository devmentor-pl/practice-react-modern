import React, { useReducer, useState } from 'react';

import SuccessModal from './SuccessModal';
import FormField from './FormField';

import FormValidator from '../utilities/FormValidator';
import EmailService from '../utilities/EmailService';
import fields from '../utilities/formFields.json';
import styles from '../utilities/styles';

const formValidator = new FormValidator();
const emailService = new EmailService();

function ContactForm() {
    const initialInputs = { fullName: '', email: '', phoneNumber: '', subject: '', message: '' };
    const [formErrors, setFormErrors] = useState({});
    const [modal, setModal] = useState(false);

    const changeHandler = (inputValues, { name, value }) => {
        setFormErrors({ ...formErrors, [name]: null });
        return { ...inputValues, [name]: value };
    };
    const [inputValues, dispatchInputValues] = useReducer(changeHandler, initialInputs);

    const areFormErrorsEmpty = (errors) =>
        Object.values(errors).every((error) => error.length === 0);

    const clearInputs = () => {
        fields.forEach(({ name }) => dispatchInputValues({ name, value: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const errors = formValidator.validate(form, fields);

        if (areFormErrorsEmpty(errors)) {
            const { fullName, email, phoneNumber, subject, message } = inputValues;

            emailService
                .send({
                    fullName,
                    email,
                    phoneNumber,
                    subject,
                    message,
                })
                .then(({ status }) => {
                    if (status === 200) {
                        setModal(true);
                        clearInputs();
                    }
                })
                .catch((error) => console.error(error));
        } else {
            setFormErrors(errors);
        }
    };

    const formFields = fields.map(({ id, name, ...settings }) => {
        const options = {
            id,
            name,
            ...settings,
            styles: styles.field,
            errorsMessages: formErrors[name] && formErrors[name] !== 0 && formErrors[name],
            value: inputValues[name],
            onChange: dispatchInputValues,
        };
        return (
            <FormField
                key={id}
                options={options}
            />
        );
    });

    return (
        <>
            <form
                style={styles.form}
                noValidate
                onSubmit={(e) => handleSubmit(e)}
            >
                <h2 style={styles.title}>Contact form</h2>
                {formFields}
                <div style={styles.buttonField}>
                    <input
                        style={styles.submitButton}
                        type="submit"
                        value="Send"
                    />
                </div>
            </form>
            {modal && (
                <SuccessModal
                    onClick={() => setModal(false)}
                    text={inputValues.fullName}
                    styles={styles.modal}
                />
            )}
        </>
    );
}

export default ContactForm;
