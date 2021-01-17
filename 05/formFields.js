const formFields = {
    firstName: {
        label: 'First Name',
        placeholder: 'First Name',
        name: 'firstName',
        value: '',
        onChange: null,
        type: 'text',
        validationRules: {
            regex: /[a-zA-Z]/,
            minLength: 5,
            dataType: 'string',
        },
    },
    lastName: {
        label: 'Last Name',
        placeholder: 'Last Name',
        name: 'lastName',
        value: '',
        onChange: null,
        type: 'text',
        validationRules: {
            regex: /[a-zA-Z]/,
            minLength: 5,
            dataType: 'string',
        },
    },
    email: {
        label: 'E-mail',
        placeholder: 'E-mail',
        name: 'email',
        value: '',
        onChange: null,
        type: 'email',
        validationRules: {
            regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            minLength: 6,
            dataType: 'string',
        },
    },
    tel: {
        label: 'Tel number',
        placeholder: 'Tel number',
        name: 'tel',
        value: '',
        onChange: null,
        type: 'tel',
        validationRules: {
            regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
            minLength: 8,
            dataType: 'number',
        },
    },
    topic: {
        label: 'Topic',
        placeholder: 'Topic',
        name: 'topic',
        value: '',
        onChange: null,
        type: 'text',
        validationRules: {
            minLength: 3,
            dataType: 'text',
        },
    },
    message: {
        label: 'Message',
        placeholder: 'Message',
        name: 'message',
        value: '',
        onChange: null,
        type: 'string',
        validationRules: {
            minLength: 20,
            dataType: 'string',
        },
    },
};

export default formFields;
