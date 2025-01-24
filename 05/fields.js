const fields = [
    {
        name: 'name',
        label: 'Imię i Nazwisko',
        required: true,
        minLength: 2,
        pattern: /^[A-Za-z]+\s+[A-Za-z]+$/,
    },
    {
        name: 'email',
        label: 'Email',
        required: true,
        pattern: /^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/,
    },
    {
        name: 'phone',
        label: 'Numer telefonu',
        type: 'number',
        fn: (formFields) => {
            const { value } = formFields.phone;

            if (value && !Number.isInteger(Number(value))) {
                return {
                    isInputValid: false,
                    errorMessage: `Pole "Numer telefonu" musi byc liczba calkowita`,
                };
            }

            return { isInputValid: true };
        },
    },
    {
        name: 'title',
        label: 'Title',
        required: true,
        minLength: 5,
    },
    {
        name: 'message',
        label: 'Message',
        required: true,
        type: 'textarea',
        minLength: 20,
    },
];

export default fields;
