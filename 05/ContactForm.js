import React, { useReducer, useState } from 'react';

// import account from './account';

const ContactForm = function () {
    const init = { firstNameAndLastName: '', email: '', phoneNumber: '', topic: '', message: '' };
    const reducer = (state, { name, value }) => {
        const newState = { ...state };
        newState[name] = value;
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, init);
    const { firstNameAndLastName, email, phoneNumber, topic, message } = state;
    const [error, setError] = useState(null);
    const fields = [
        {
            name: 'firstNameAndLastName',
            label: 'firstNameAndLastName',
            required: true,
            pattern: '^[a-zA-Z-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+ [a-zA-Z-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$',
        },
        {
            name: 'email',
            label: 'email',
            required: true,
            pattern: '([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+).(.+)',
        },
        {
            name: 'phoneNumber',
            label: 'phoneNumber',
            required: false,
            pattern: '^[0-9]{9}$',
        },
        {
            name: 'topic',
            label: 'topic',
            required: true,
        },
        {
            name: 'message',
            label: 'message',
            required: true,
        },
    ];

    const validate = () => {
        let err = 'Formularz wypełniony prawidłowo!';
        fields.forEach((field) => {
            const value = state[field.name];

            if (field.required) {
                if (value.length === 0) {
                    err = `Dane w polu ${field.label} są wymagane.`;
                }
            }
            if (field.pattern) {
                const reg = new RegExp(field.pattern);
                if (!reg.test(value)) {
                    err = `Dane w polu ${field.label} zawierają niedozwolone znaki lub nie są zgodne z przyjętym w Polsce wzorem.`;
                    console.log(value);
                }
            }
        });
        return err;
    };

    const handleSubmit = function (e) {
        e.preventDefault();

        const errorMsg = validate(state);
        if (errorMsg) {
            setError(errorMsg);
        }
    };
    // console.log(account);

    const myStyles = {
        color: 'red',
    };

    return (
        <main>
            <div style={myStyles}>error: {error}</div>
            <form onSubmit={handleSubmit}>
                <label>firstNameAndLastName:</label>
                <input
                    name="firstNameAndLastName"
                    value={firstNameAndLastName}
                    onChange={(e) => dispatch(e.target)}
                />
                <label>email</label>
                <input name="email" value={email} onChange={(e) => dispatch(e.target)} />
                <label>phoneNumber</label>
                <input
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => dispatch(e.target)}
                />
                <label>topic</label>
                <input name="topic" value={topic} onChange={(e) => dispatch(e.target)} />
                <label>message</label>
                <input name="message" value={message} onChange={(e) => dispatch(e.target)} />
                <input type="submit" />
            </form>
        </main>
    );
};

export default ContactForm;
