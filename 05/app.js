import React from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line import/named
import  ContactForm  from './ContactForm';

const App = () => (
    <ContactForm />
);

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
