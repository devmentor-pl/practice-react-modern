const fields = [
    {
        name: 'firstName',
        label: 'Firstname',
        required: true,
        pattern: false,
        type: 'text',
        htmlTag: 'input',
    },
    {
        name: 'lastName',
        label: 'Lastname',
        required: true,
        pattern: false,
        type: 'text',
        htmlTag: 'input',
    },
    {
        name: 'email',
        label: 'E-mail',
        required: true,
        pattern: '^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$',
        type: 'text',
        htmlTag: 'input',
    },
    {
        name: 'telephone',
        label: 'Phone number',
        required: false,
        pattern: `^(?:+d{2})?d{9}$`,
        type: 'text',
        htmlTag: 'input',
    },
    {
        name: 'topic',
        label: 'Topic',
        required: true,
        pattern: false,
        type: 'text',
        htmlTag: 'input',
    },
    {
        name: 'message',
        label: 'Message',
        required: true,
        pattern: false,
        type: 'text',
        htmlTag: 'textarea',
    },
];

export default fields;
