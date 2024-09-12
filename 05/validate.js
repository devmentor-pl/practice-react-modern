export default function validate(fields, values) {
    const errors = [];
    fields.forEach(({ name, validation }) => {
        const value = values[name];

        if (validation.isRequired && value === '') {
            errors.push(`pole ${name} musi być uzupełnione`)
        }

        if (validation.regex && !validation.regex.test(value)) {
            errors.push(`pole ${name} ma niepoprawny format`)
        }
    })

    return errors;
}