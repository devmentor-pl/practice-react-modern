import React, { useState, useReducer } from 'react';
import formFieldsData from './providers/formFieldsData';
import styles from './providers/styles';

// import account from './account';

function ContactForm() {
    // console.log(account);
    const init = { firstName: '', lastName: '', email: '', number: '', subject: '', message: '' };
    const reducer = (state, { name, value }) => ({ ...state, [name]: value });
    const [state, dispatch] = useReducer(reducer, init);
    const [errorList, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    console.log(state);

    function renderFormFilds() {
        return formFieldsData.map((fieldData) => {
            const { name, label, type } = fieldData;

            return (
                <div key={name} style={styles.formField}>
                    <label style={styles.labelField} htmlFor="{name}">
                        {label}
                    </label>
                    <input
                        id={name}
                        name={name}
                        type={type}
                        value={state[name]}
                        onChange={(e) => dispatch(e.target)}
                        style={styles.inputField}
                    />
                </div>
            );
        });
    }

    function validate() {
        const err = [];

        formFieldsData.map((formField) => {
            const { name, pattern, error } = formField;
            return pattern.test(state[name]) ? null : err.push({ [name]: error });
        });

        if (err.length === 0) {
            setSuccess(true);
        }
        setError(err);
    }

    function renderErrorList() {
        return errorList.map((err) => {
            const errorArray = Object.entries(err);
            const [name, error] = errorArray[0];

            return (
                <li style={styles.summaryItem} key={name}>
                    {name} : {error}
                </li>
            );
        });
    }

    function renderSuccessInfo() {
        return success ? 'Your message has been sent. Thank you!' : '';
    }

    function renderSummary() {
        return errorList.length === 0 ? renderSuccessInfo() : renderErrorList();
    }

    function handleSubmit(e) {
        e.preventDefault();
        validate();
    }

    return (
        <section style={styles.section}>
            <header>
                <h1 style={styles.sectionTitle}>Contact with us!</h1>
            </header>
            <main style={styles.sectionMain}>
                <form onSubmit={handleSubmit}>
                    {renderFormFilds()}
                    <button style={styles.button} type="submit">
                        Sumbit
                    </button>
                </form>
                <ul style={styles.summaryList}>{renderSummary()}</ul>
            </main>
        </section>
    );
}

export default ContactForm;
