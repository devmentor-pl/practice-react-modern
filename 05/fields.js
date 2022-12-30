/* eslint-disable no-useless-escape */
const fields = [
    {
        name: 'name',
        label: 'Imię i nazwisko:',
        type: 'text',
        required: 'true',
        htmlTag: 'input',
        class: 'form__input',
        pattern: `^[A-Z][a-z]* [A-Z][a-z]*$`
    },
    {
        name: 'email',
        label: 'E-mail:',
        type: 'text',
        required: 'true',
        htmlTag: 'input',
        class: 'form__input',
        pattern: `^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$`
    },
    {
        name: 'phone',
        label: 'Telefon:',
        type: 'text',
        htmlTag: 'input',
        class: 'form__input',
        pattern: `^(?:\+\d{2})?\d{9}$`
    },
    {
        name: 'subject',
        label: 'Temat:',
        type: 'text',
        htmlTag: 'input',
        class: 'form__input',
        required: 'true',
    },
    {
        name: 'message',
        label: 'Wiadomość:',
        type: 'text',
        htmlTag: 'textarea',
        class: 'form__textarea',
        required: 'true',
    },
]


export default fields