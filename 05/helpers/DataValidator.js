export default class DataValidator {
    name = {
        regExp: /^[a-zA-Z]{3,}(?:(-| )[a-zA-Z]+){0,2}$/,
        err: 'required (min. 3 letters)',
        required: true,
    };

    lastName = {
        regExp: /^[a-zA-Z]{3,}(?:(-| )[a-zA-Z]+){0,2}$/,
        err: 'required (min. 3 letters)',
        required: true,
    };

    email = {
        regExp: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        err: 'required (valid e-mail address)',
        required: true,
    };

    phone = {
        regExp: /^((00)?)[1-9]{1}\d{7,13}$/,
        err: 'only digits (eg. 606606606 or 0048606606606) or empty (not required)',
        required: false,
    };

    subject = {
        regExp: /^.{3,}$/,
        err: 'required (min. 3 characters)',
        required: true,
    };

    message = {
        regExp: /^.{5,}$/,
        err: 'required (min. 5 characters)',
        required: true,
    };

    checkDataErrors(inputName, inputValue) {
        return !(!this[inputName].required && inputValue.trim().length === 0)
            ? this.isDataValid(inputName, inputValue)
            : null;
    }

    isDataValid(inputName, inputValue) {
        const isDataValid = this.isMatchRegex(inputName, inputValue.trim());
        return !isDataValid ? this.createErrObject(inputName) : null;
    }

    isMatchRegex(inputName, inputValue) {
        return this[inputName].regExp.test(inputValue);
    }

    createErrObject(inputName) {
        return {
            [inputName]: this[inputName].err,
        };
    }
}
