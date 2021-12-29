import React from 'react';
import ReactDOM from 'react-dom';

import ContactForm from './ContactForm';

const App = function () {
    return <ContactForm />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
