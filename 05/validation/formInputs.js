const FORM_INPUTS = [
    {
        name: 'name',
        label: 'Name',
        required: true,
        pattern: '^[a-zA-Z -]+$',
        value: '',
        type: 'text',
    },
    {
        name: 'email',
        label: 'Email',
        required: true,
        // eslint-disable-next-line no-useless-escape
        pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", // prettier-ignore
        type: 'email',
        value: '',
    },
    {
        name: 'phone',
        label: 'Phone',
        required: true,
        // eslint-disable-next-line no-useless-escape
        pattern: '^[0-9]+$',
        type: 'text',
        value: '',
    },
    {
        name: 'subject',
        label: 'Subject',
        required: true,
        type: 'text',
        value: '',
    },
    {
        name: 'content',
        label: 'Content',
        required: true,
        type: 'textarea',
        value: '',
    },
];

export default FORM_INPUTS;
