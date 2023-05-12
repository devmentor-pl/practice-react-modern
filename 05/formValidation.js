function formValidation(data, fields) {
    const errors = [];

    // eslint-disable-next-line func-names
    fields.forEach((field) => {
        const value = data[field.name];
        const { name, label, required = true, pattern = null, format } = field;

        if (required) {
            if (value.length < 2) {
                errors.push({
                    name,
                    message: `Dane w polu "${label}" są wymagane.`,
                });
            } else if (pattern) {
                const reg = new RegExp(pattern);
                if (!reg.test(value)) {
                    errors.push({
                        name,
                        message: `Wprowadź dane w polu "${label}" w formacie "${format}"`,
                    });
                }
            }
        }
    });

    return errors;
}

export default formValidation;
