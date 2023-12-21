const validateFormFields = (state, customFields) => {
    const errors = {};

    const fields = customFields || [
        { name: 'firstName', label: 'First name', required: true, minLength: 2 },
        { name: 'lastName', label: 'Last name', required: true, minLength: 2 },
        {
            name: 'email',
            label: 'Email',
            required: true,
            pattern: '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}$',
        },
        { name: 'phoneNumber', label: 'Phone number', required: false },
        { name: 'subject', label: 'Subject', required: true, minLength: 3 },
        { name: 'message', label: 'Message', required: true, minLength: 10 },
    ];
    fields.forEach((field) => {
        const value = state[field.name];

        if (field.required && value.trim() === '') {
            errors[field.name] = `${field.label} is required.`;
        }

        if (field.minLength && value.length < field.minLength) {
            errors[
                field.name
            ] = `${field.label} should be at least ${field.minLength} characters long.`;
        }

        if (field.pattern && !new RegExp(field.pattern).test(value)) {
            errors[field.name] = `${field.label} is not in the correct format.`;
        }

        if (!errors[field.name]) {
            errors[field.name] = null;
        }
    });

    return errors;
};

// Zadanie dodatkowe
const generateFormFields = (customFields) =>
    customFields.map((field) => ({
        ...field,
        value: '',
        placeholder: field.placeholder || '',
        type: field.type || 'text',
    }));

export { validateFormFields, generateFormFields };
