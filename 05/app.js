import React from 'react';
import ReactDOM from 'react-dom';

import ContactForm from './ContactForm';
import fields from './formFields';

const App = function App() {
    return <ContactForm fieldsList={fields} />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
