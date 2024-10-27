import React, { useReducer, useState } from "react";

import { fields } from "./field";

function ContactForm() {
    const init = { fullName: "", email: "", tel: "", title: "", message: "" };
    const reducer = (state, { name, value }) => ({ ...state, [name]: value });
    const [state, dispatch] = useReducer(reducer, init);

    const [allErrors, setErrors] = useState([]);

    function validateInputs() {
        const errors = [];

        fields.forEach((field) => {
            if (field.required) {
                if (state[field.name].length === 0) {
                    errors.push(`Pole  ${field.label} jest niepoprawne`);
                }
            } else if (field.pattern) {
                const { pattern } = field;
                if (!pattern.test(state[field.name])) {
                    errors.push(`Pole  ${field.label} jest niepoprawne`);
                }
            }
        });

        return errors;
    }
    function renderErrors() {
        return allErrors.map((err) => err.map((el) => <li>{el}</li>));
    }
    function handleSubmit(e) {
        e.preventDefault();

        const errors = validateInputs();
        setErrors([errors]);
    }
    const allFields = fields.map((field) => (
        <input
            name={field.name}
            value={state[field.name]}
            placeholder={field.placeholder}
            type={field.type}
            onChange={(e) => dispatch(e.target)}
        />
    ));
    return (
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <h1>Register</h1>
            <ul>{renderErrors()}</ul>
            <div className="error" />

            {allFields}

            <input type="submit" />
        </form>
    );
}

export default ContactForm;
