function validateFields(formFields, validators) {
    return validators.reduce(
        (acc, field) => {
            const { name, label, required = false, pattern = null, minLength, fn } = field;
            const input = acc.validatedFields[name];
            const value = input?.value.trim() || '';

            let error = '';

            if (required && !value) {
                error = `Pole "${label}" jest wymagane`;
            } else if (minLength && value.length < minLength) {
                error = `Pole "${label}" musi zawierac co najmniej ${minLength} znakow`;
            } else if (pattern) {
                const reg = new RegExp(pattern);

                if (!reg.test(value)) {
                    error = `Pole "${label}" ma nieprawidlowy format`;
                }
            } else if (fn) {
                const { isInputValid, errorMessage } = fn(formFields);

                if (!isInputValid) {
                    error = errorMessage;
                }
            }

            return {
                ...acc,
                validatedFields: {
                    ...acc.validatedFields,
                    [name]: {
                        ...input,
                        error,
                    },
                },
                isFormValid: acc.isFormValid && !error,
            };
        },
        { validatedFields: { ...formFields }, isFormValid: true }
    );
}

export default validateFields;
