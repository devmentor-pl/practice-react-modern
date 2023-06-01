// import React from 'react';

function validator(inputData, fieldsArr) {
    // eslint-disable-next-line prefer-const
    let errors = [];

    // eslint-disable-next-line array-callback-return
    fieldsArr.map((field) => {
        const value = inputData[field.name];

        if (field.required) {
            if (value.length <= 2 && field.name !== 'email') {
                errors.push(`${field.label} is too short`);
            }
        }

        if (field.pattern) {
            const reg = new RegExp(field.pattern);
            if (!reg.test(value)) {
                errors.push(`${field.label} is invalid`);
            }
        }
    });
    return errors;
}

export default validator;
