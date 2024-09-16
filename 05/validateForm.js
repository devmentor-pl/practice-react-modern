function validateForm(data) {
    const errors = [];

    if (data.firstName.length < 2) {
        errors.push('Enter correct name');
    }
    if (data.lastName.length < 2) {
        errors.push('Enter correct surname');
    }
    if (data.email.length < 5 || !data.email.includes('@')) {
        errors.push('Enter correct email');
    }
    if (data.subject.length < 3 ) {
        errors.push('Your subject name is too short');
    }
    if (data.message.length < 19) {
        errors.push('Message requires a minimum of 19 characters');
    }

    return errors;
}

export default validateForm;