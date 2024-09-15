import React from 'react';
import { createRoot } from 'react-dom/client';

import ContactForm from './ContactForm';

const App = function App() {
    const fieldsList = [
        {name: 'name', type: 'text', defaultValue: '', validation: {isReq: true}},
        {name: 'email', type: 'email', defaultValue: '', validation: {isReq: true, regex: /^[-\w.]+@([-\w.]+)[a-z]+$/i}},
        {name: 'phone', type: 'text', defaultValue: '', validation: {isReq: true, regex: /^[0-9]+$/}},
        {name: 'topic', type: 'text', defaultValue: '', validation: {isReq: true}},
        {name: 'content', type: 'textarea', defaultValue: '', validation: {isReq: true}}
    ]

    return <ContactForm fieldsList = {fieldsList}/>;
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
