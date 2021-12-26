import React from 'react';
import ReactDOM from 'react-dom';

import ContactForm from './components/ContactForm';

const App = () => <ContactForm />;

ReactDOM.render(<App />, document.querySelector('#root'));
