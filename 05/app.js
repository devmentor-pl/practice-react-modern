import React from 'react';
import { createRoot } from 'react-dom/client';

import ContactForm from './ContactForm';
import fields from './fields';

function App() {
    return <ContactForm fields={fields} />;
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
