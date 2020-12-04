class DataValidator {
    constructor(fields, data) {
        this.fields = fields;
        this.data = data;
    }

    static isRequiredValid(value) {
        if (value === null) {
            return false;
        }

        return value.trim().length > 0;
    }

    static isEmailValid(email) {
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRe.test(email);
    }

    static isPhoneValid(phone) {
        if (phone && phone.trim().length > 0) {
            const re = /\d/g;

            return re.test(phone);
        }

        return true;
    }

    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    getDataForFieldName(fieldName) {
        return this.data[fieldName] || null;
    }

    validate() {
        const errorMessages = [];

        Object.entries(this.fields).forEach(([fieldName, validationRules]) => {
            const data = this.getDataForFieldName(fieldName);
            const fieldValue = data ? data.trim() : null;
            let validationFailed = false;

            const addValidationError = errorMessage => {
                if (!validationFailed) {
                    errorMessages.push(errorMessage);
                    validationFailed = true;
                }
            };

            validationRules.forEach(fieldRule => {
                const { rule, errorMessage } = fieldRule;

                const validationFunction =
                    DataValidator[`is${DataValidator.capitalize(rule)}Valid`];

                if (typeof validationFunction === 'function') {
                    if (!validationFunction(fieldValue)) {
                        addValidationError(errorMessage);
                    }
                }
            });
        });

        return errorMessages;
    }
}

export default DataValidator;
