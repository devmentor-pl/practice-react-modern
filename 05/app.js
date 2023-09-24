import React from 'react';
import { createRoot } from 'react-dom/client';

import ContactForm from './ContactForm';

const App = function App() {
    const inputFields = [
        {
            name: 'name',
            type: 'text',
            value: '',
            validation: {
                isRequired: true
            }
        },
        {
            name: 'email',
            type: 'email',
            value: '',
            validation: {
                isRequired: true,
                regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
            }
        },
        {
            name: 'phone',
            type: 'text',
            value: '',
            validation: {
                isRequired: true,
                regex: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s\\.]?[0-9]{3}$/
            }
        },
        {
            name: 'topic',
            type: 'text',
            value: '',
            validation: {
                isRequired: true
            }
        },
        {
            name: 'content',
            type: 'textarea',
            value: '',
            validation: {
                isRequired: true
            }
        }
    ]
    return <ContactForm inputFields={inputFields}/>;
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
