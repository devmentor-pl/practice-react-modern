import React from 'react';
import { createRoot } from 'react-dom/client';

import ContactForm from './ContactForm';
import FORM_INPUTS from './validation/formInputs';

function App() {
    return <ContactForm formInputs={FORM_INPUTS} />;
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
