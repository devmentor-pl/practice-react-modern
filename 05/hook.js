import { useState } from 'react';

const useErrors = state => {
    const [errors, setError] = useState([]);

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
        const arrError = [];
        if (firstName.length === 0 || firstName.length <= 1) {
            arrError.push('Field firstname is required!');
        }
        if (lastName.length === 0 || lastName.length <= 1) {
            arrError.push('Field lastname is required!');
        }
        if (!email.includes('@')) {
            arrError.push('Email need @ sign!');
        }
        if (!validationPhoneNumber()) {
            arrError.push('Phone number is incorrect! (Write e.g 500-500-500) \n');
        }
        if (!validationData()) {
            arrError.push('Date is incorrect!');
        }
        if (!validationTime()) {
            arrError.push('Time is incorrect!');
        }
        if (comment.length === 0 || comment.length <= 1) {
            arrError.push('Field comment is required!');
        }
        setError(arrError);
    };

    return [errors, validationForm];
};

export default useErrors;
