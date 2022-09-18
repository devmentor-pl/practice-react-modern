const fields = [
    {
        name: 'name',
        label: 'Name:',
        type: 'text',
        defaultValue: '',
        pattern: /[a-zA-Z]{2,}/,
        errortype: 'This field must be at least two characters long.',
        required: true,
    },
    {
        name: 'email',
        label: 'Email:',
        type: 'email',
        defaultValue: '',
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errortype: 'Incorrect email address.',
        required: true,
    },
    {
        name: 'phone',
        label: 'Phone number:',
        type: 'text',
        defaultValue: '',
        pattern: /^[0-9]+$/,
        errortype: 'Incorrect phone number.',
        required: false,
    },
    {
        name: 'topic',
        label: 'Topic:',
        type: 'text',
        defaultValue: '',
        pattern: /[a-zA-Z]{2,}/,
        errortype: 'This field must be at least two characters long.',
        required: true,
    },
    {
        name: 'message',
        label: 'Message:',
        type: 'textarea',
        defaultValue: '',
        pattern: /[a-zA-Z]{2,}/,
        errortype: 'This field must be at least two characters long.',
        required: true,
    },
];

export default fields;
