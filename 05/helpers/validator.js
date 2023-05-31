// import React from 'react';

function validator(inputData, fieldsArr) {
    // eslint-disable-next-line prefer-const
    let errors = [];

    fieldsArr.map((field) => {
        const value = inputData[field.name];

        if (field.required) {
            if (value.length <= 2) {
                errors.push(`${field.label} is too short`);
            }
        }

        if (field.pattern) {
            const reg = new RegExp(field.pattern);
            if (!reg.test(value)) {
                errors.push(`${field.label} is invalid`);
            }
        }

        // eslint-disable-next-line
        console.log(errors);
        return errors;
    });
}

export default validator;
