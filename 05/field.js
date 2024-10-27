/* eslint-disable import/prefer-default-export */
export const fields = [
    {
        name: "fullName",
        placeholder: "imię i nazwisko",
        type: "text",
        label: "Imię i nazwisko",
        required: true,
    },
    {
        name: "email",
        placeholder: "email",
        type: "text",
        label: "Email",
        required: true,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    {
        name: "tel",
        placeholder: "telefon",
        type: "tel",
        label: "Telefon",
        required: false,
        pattern: /[0-9]{9}/,
    },
    {
        name: "title",
        placeholder: "title",
        type: "text",
        label: "Temat",
        required: true,
    },
    {
        name: "message",
        placeholder: "message",
        type: "text",
        label: "Wiadomość",
        required: true,
    },
];
