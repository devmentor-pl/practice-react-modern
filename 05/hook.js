const useErrors = state => {
    const { firstName, lastName, email, tel, date, time, comment } = state;

    const validationPhoneNumber = () => {
        const reg = /([0-9]{3})-([0-9]{3})-([0-9]{3})/;
        return reg.test(tel);
    };

    const validationData = () => {
        const reg = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
        return reg.test(date);
    };

    const validationTime = () => {
        const reg = /([0-9]{2}):([0-9]{2})/;
        return reg.test(time);
    };

    const validationForm = () => {
        const errors = [];
        if (firstName.length === 0 || firstName.length <= 1) {
            errors.push('Field firstname is required!');
        }
        if (lastName.length === 0 || lastName.length <= 1) {
            errors.push('Field lastname is required!');
        }
        if (!email.includes('@')) {
            errors.push('Email need @ sign!');
        }
        if (!validationPhoneNumber()) {
            errors.push('Phone number is incorrect! (Write e.g 500-500-500) \n');
        }
        if (!validationData()) {
            errors.push('Date is incorrect!');
        }
        if (!validationTime()) {
            errors.push('Time is incorrect!');
        }
        if (comment.length === 0 || comment.length <= 1) {
            errors.push('Field comment is required!');
        }

        return errors;
    };
    return [validationForm];
};

export default useErrors;
