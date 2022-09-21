export const fields = [
    {
        name: 'nameAndSurname',
        label: 'Imie i nazwisko',
        pattern: /^([a-ząćęłńóśźż]{2,})\s([a-ząćęłńóśźż]{2,})$/i,
        error: 'Dane w polu Imie i nazwisko są niepoprawne - Ciąg minimum 4 znaków rozdzielony spacją',
        type: 'text',
        required: true,
    },
    {
        name: 'email',
        label: 'Email',
        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
        error: 'Dane w polu Email są niepoprawne - Przykład.: example@domena.com',
        type: 'email',
        required: true,
    },
    {
        name: 'phone',
        label: 'Telefon',
        pattern: /^[1-9]{1}[0-9]{2}-[0-9]{3}-[0-9]{3}$/i,
        error: 'Dane w polu Telefon są niepoprawne - Przykład.: 111-222-333',
        type: 'tel',
        required: false,
    },
    {
        name: 'topic',
        label: 'Temat',
        pattern: /[a-ząćęłńóśźż]{2,}/i,
        error: 'Dane w polu Temat są niepoprawne - Minimum 2 znaki',
        type: 'text',
        required: true,
    },
    {
        name: 'message',
        label: 'Wiadomość',
        pattern: /[a-ząćęłńóśźż]{20,}/i,
        error: 'Dane w polu Wiadomość są niepoprawne - Minimum 20 znaków',
        type: 'textarea',
        required: true,
    },
];

export default fields;
