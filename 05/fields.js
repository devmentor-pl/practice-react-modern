/* eslint-disable no-useless-escape */
const fields = [
    {
        name: 'name',
        label: 'Imię i nazwisko:',
        type: 'text',
        required: 'true',
        pattern: `^[A-Z][a-z]* [A-Z][a-z]*$`
    },
    {
        name: 'email',
        label: 'E-mail:',
        type: 'text',
        required: 'true',
        pattern: `^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$`
    },
    {
        name: 'phone',
        label: 'Telefon:',
        type: 'text',
        pattern: `^(?:\+\d{2})?\d{9}$`
    },
    {
        name: 'subject',
        label: 'Temat:',
        type: 'text',
        required: 'true',
    },
    {
        name: 'message',
        label: 'Wiadomość:',
        type: 'text',
        required: 'true',
    },
]


export default fields