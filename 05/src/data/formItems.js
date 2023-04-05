const formItems = [
    {
        name: 'name',
        label: 'Imię i nazwisko',
        type: 'text',
        required: true,
        pattern: '[a-z]{3,}',
        placeholder: 'Min 3 znaki...',
        htmlTag: 'input',
    },
    {
        name: 'email',
        label: 'Adres email',
        type: 'email',
        required: true,
        pattern: '[0-9a-z_.-]+@[0-9a-z.-]+.[a-z]{2,3}',
        placeholder: 'example@example.pl',
        htmlTag: 'input',
    },
    {
        name: 'phone',
        label: 'Nr telefonu',
        type: 'tel',
        pattern: '[0-9]{3}-[0-9]{3}-[0-9]{3}|^$',
        placeholder: '123-456-789',
        htmlTag: 'input',
    },
    {
        name: 'subject',
        label: 'Temat',
        type: 'text',
        required: true,
        placeholder: 'Wpisz temat...',
        htmlTag: 'input',
    },
    {
        name: 'message',
        label: 'Wiadomość',
        type: 'text',
        required: true,
        placeholder: 'Wpisz wiadomość tutaj...',
        htmlTag: 'textarea',
    },
];

export default formItems;
