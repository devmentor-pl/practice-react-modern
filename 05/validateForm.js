const validateForm = values => {
    const errors = {};

    if (values.firstName.length <= 2) {
        errors.firstNameErr = 'is to short!';
    }
    if (values.lastName.length <= 2) {
        errors.lastNameErr = ' is to short!';
    }
    if (!values.email.includes('@')) {
        errors.emailErr = ' is not valid';
    }
    if (values.phoneNumber.length < 9) {
        errors.phoneNumberErr = ' is not valid';
    }
    if (values.message.length <= 0) {
        errors.messageErr = 'message cannot be empty';
    }
    if (values.subject.length <= 0) {
        errors.subjectErr = 'subject cannot be empty';
    }
    return errors;
};

export default validateForm;
