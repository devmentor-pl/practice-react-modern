import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactForm from './components/form/ContactForm';

function App() {
    return <ContactForm />;
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
