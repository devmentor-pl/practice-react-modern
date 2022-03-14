const formFieldsData = [
    {
        name: 'firstName',
        label: 'First Name: ',
        type: 'text',
        pattern: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
        error: 'First name must be at least two characters long',
        isRequired: true,
    },
    {
        name: 'lastName',
        label: 'Last Name: ',
        type: 'text',
        pattern: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
        error: 'Last name must be at least two characters long',
        isRequired: true,
    },
    {
        name: 'email',
        label: 'Email: ',
        type: 'email',
        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        error: 'E-mail must contain @',
        isRequired: true,
    },
    {
        name: 'number',
        label: 'Number: ',
        type: 'number',
        pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/,
        error: 'This number is not valid',
        isRequired: false,
    },
    {
        name: 'subject',
        label: 'Subject: ',
        type: 'text',
        pattern: /^.{2,}$/,
        error: 'Subject must be at least two characters long',
        isRequired: true,
    },
    {
        name: 'message',
        label: 'Message: ',
        type: 'text',
        pattern: /^.{2,}$/,
        error: 'Message must be at least two characters long',
        isRequired: true,
    },
];

export default formFieldsData;
