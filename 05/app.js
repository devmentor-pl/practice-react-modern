import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm';
import DataContext from './context';
import inputsData from './inputs';

function App() {
    const Context = DataContext;
    
    return (
        <Context.Provider value = {inputsData}>
            <ContactForm />
        </Context.Provider>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
