const inputsData = [
    {
        name:'firstName',
        type:'text',
        label: 'First name',
        pattern: /^[a-zA-Z]{2,}$/,
        isRequired: true,
        errorMessage: 'Wrong first name!'
    },
    {
        name:'secondName',
        type:'text',
        label: 'Second name',
        pattern: /^[a-zA-Z]{2,}$/,
        isRequired: true,
        errorMessage: 'Wrong second name!'
    },
    {
        name:'email',
        type:'email',
        label: 'Email',
        pattern: /^[a-z0-9]+.*[a-z0-9]+@{1}[a-z0-9]+.{1}[a-z0-9]+$/,
        isRequired: true,
        errorMessage: 'Wrong email!'
    },
    {
        name:'number',
        type:'tel',
        label: 'Phone number',
        pattern: /^[0-9]{9,}$/,
        isRequired: true,
        errorMessage: 'Wrong phone number!'
    },
    {
        name:'subject',
        type:'text',
        label: 'Subject',
        pattern: /^[a-zA-Z]+$/,
        isRequired: true,
        errorMessage: 'Wrong subject!'
    },
    {
        name:'message',
        type:'text',
        label: 'Message',
        pattern: /[a-zA-Z]+/,
        isRequired: true,
        errorMessage: 'Wrong message!'
    },
]

export default inputsData;