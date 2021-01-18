import React from 'react';
import ReactDOM from 'react-dom';

import ContactForm from './components/ContactForm';

const App = () => {
    return <ContactForm />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
