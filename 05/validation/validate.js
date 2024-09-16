export default function validate(validationFields, inputElementsArr) {
    let errors = {};
    inputElementsArr.forEach((input) => {
        const { name: inputName, value: inputValue } = input;
        const validationField = validationFields.find((el) => el.name === inputName);
        const { label, pattern, required, name } = validationField;

        if (required) {
            if (inputValue.length === 0) {
                const message = `${label} input is required`;
                errors = { ...errors, [name]: message };
            }
        }

        if (pattern) {
            const reg = new RegExp(pattern);
            const isPatternMatch = reg.test(inputValue);
            if (!isPatternMatch) {
                const message = `Provided data in ${label} not valid`;
                errors = { ...errors, [name]: message };
            }
        }

        return null;
    });

    return errors;
}
