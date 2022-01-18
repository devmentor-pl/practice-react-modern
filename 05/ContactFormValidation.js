class ContactFormValidation {
    /* eslint-disable */
    isEmpty(value) {
        if (!value) {
            return true;
        }
        return false;
    }

    checkDataCorrectness(regex, value) {
        if (regex.test(value)) {
            return true;
        }
        return false;
    }

    run(fields, state) {
        const errors = {};
        let errorsCount = 0;
        fields.forEach((field) => {
            errors[field.name] = [];
        });

        fields.forEach((field) => {
            const value = state[field.name];
            if (field.validationRules.isRequired) {
                if (this.isEmpty(value)) {
                    errors[field.name].push('Field is require');
                    //some kind of errors
                } else if (field.validationRules.regex) {
                    if (!this.checkDataCorrectness(field.validationRules.regex, value)) {
                        errors[field.name].push('Incorrect format');
                    }
                }
            }

            if (!field.validationRules.isRequired) {
                if (!this.isEmpty(value)) {
                    // console.log('notEmpty');
                    if (this.checkDataCorrectness(field.validationRules.regex, parseInt(parsedValue))) {
                        errors[field.name].push('Incorrect format');
                    }
                }
            }
            errorsCount += errors[field.name].length;
        });
        console.log(errors);
        return [errors, errorsCount];
    }
}

export default ContactFormValidation;
/* eslint-enable */
