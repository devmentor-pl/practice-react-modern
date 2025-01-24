import React from 'react';
import Button from './components/Button';
import FormFields from './components/FormFields';
import Form from './components/Form';
import { fieldsTypes, FormProvider } from './context/FormContext';
// import account from './account';

function ContactForm({ fields }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <FormProvider fields={fields}>
            <Form onSubmit={handleSubmit}>
                <FormFields />
                <Button type="submit" style={{ color: '#ffffff', backgroundColor: '#086ca2' }}>
                    Wyślij
                </Button>
            </Form>
        </FormProvider>
    );
}

ContactForm.propTypes = {
    fields: fieldsTypes,
};

export default ContactForm;
