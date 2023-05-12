const formFields = [
    {
        name: 'firstName',
        label: 'Imię',
        type: 'text',
    },
    {
        name: 'lastName',
        label: 'Nazwisko',
        type: 'text',
    },
    {
        name: 'email',
        label: 'Email',
        pattern: /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,4}$/i,
        format: 'nazwa@email.com',
        type: 'email',
    },
    {
        name: 'phoneNumber',
        label: 'Numer telefonu',
        pattern: /[0-9]{3}-[0-9]{3}-[0-9]{3}/,
        format: '123-456-789',
        type: 'tel',
        required: false,
    },
    {
        name: 'topic',
        label: 'Temat',
        type: 'text',
    },
    {
        name: 'message',
        label: 'Wiadomość',
        type: 'textarea',
    },
];

export default formFields;
