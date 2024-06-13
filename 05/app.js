import ContactForm from './ContactForm';

function App() {
    return <ContactForm />;
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
