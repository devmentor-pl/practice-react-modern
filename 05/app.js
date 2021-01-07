import React from 'react';
import ReactDOM from 'react-dom';

import ContactForm from './components/ContactForm';

const App = () => {
    const formFields = [
        { label: 'First Name', name: 'firstName', field: 'input', type: 'text', required: true},
        { label: 'Last Name', name: 'lastName',  field: 'input', type: 'text', required: true},
        { label: 'E-mail', name: 'email',  field: 'input', type: 'email', required: true},
        { label: 'Phone Number', name: 'phone',  field: 'input', type: 'tel', required: false},
        { label: 'Title', name: 'title',  field: 'input', type: 'text', required: true},
        { label: 'Message', name: 'message', field: 'textarea' , required: true}
    ]
    return <ContactForm formFields={formFields}/>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
