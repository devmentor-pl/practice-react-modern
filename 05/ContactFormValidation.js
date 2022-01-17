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
}

export default ContactFormValidation;
/* eslint-enable */
