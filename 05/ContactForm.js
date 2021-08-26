import React, { useReducer} from 'react';

const ContactForm = () => {

    const init = {

        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        comment: ''
    };

    const reducer = (state, {name, value}) => {
        return { ...state, [name]: value };
    };

    const [state, dispatch] = useReducer(reducer, init);
    const { firstName, lastName, email, phone, topic, comment} = state;

    const validationPhoneNumber = () => {
        const reg = /([0-9]{3})-([0-9]{3})-([0-9]{3})/;
        return reg.test(phone);
    };
    
    const validationForm = errors => {
        if (firstName.length === 0 || firstName.length <= 1) {
            errors.push('Field firstname is required!');
        }
        if (lastName.length === 0 || lastName.length <= 1) {
            errors.push('Field lastname is required!');
        }
        if (!email.includes('@')) {
            errors.push('Email need @ sign!');
        }
        if (!validationPhoneNumber()) {
            errors.push('Phone number is incorrect! (Write e.g 500-500-500) \n');
        }
        if (topic.length === 0 || topic.length <= 1) {
            errors.push('Field topic is required!');
        }
        if (comment.length === 0 || comment.length <= 1) {
            errors.push('Field comment is required!');
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        const errors = [];

        validationForm(errors);

        if (errors.length > 0) {
            window.alert(errors.join(',  '));
        } else {
            window.alert('Dane zostały poprawnie wprowadzone!');
        }
    };


    return (
        <section onSubmit={handleSubmit}>
            <h1>ContactForm</h1>
            <form noValidate>
                <input
                    name='firstName'
                    value={firstName}
                    type='text'

                    onChange={e => dispatch(e.target)}
                    placeholder='Name'
                    required
                />
                <input
                    name="lastName"
                    value={lastName}
                    type="text"
                    onChange={e => dispatch(e.target)}
                    placeholder="LastName"
                    required
                />
                <input
                    name="email"
                    value={email}
                    type="email"
                    onChange={e => dispatch(e.target)}
                    placeholder="Email"
                    required
                />
                <input
                    name="phone"
                    value={phone}
                    type="phone"
                    onChange={e => dispatch(e.target)}
                    placeholder="phone"
                />
                <input
                    name="topic"
                    value={topic}
                    type="topic"
                    onChange={e => dispatch(e.target)}
                    placeholder="topic"
                />
                <input type="submit" value="Send" />
            </form>

            <textarea name="comment" value={comment} onChange={e => dispatch(e.target)} required/>
        </section>
    )
};

export default ContactForm;
