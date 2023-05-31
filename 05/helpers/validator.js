// import React from 'react';

function validator(inputData, fieldsArr) {
    // eslint-disable-next-line prefer-const
    let errors = [];

    fieldsArr.map((field) => {
        const value = inputData[field.name];

        if (field.required) {
            if (value.length <= 2) {
                errors.push({
                    name: [field.name],
                    info: 'this is too short',
                });
            }

            if (field.pattern) {
                const reg = new RegExp(field.pattern);
                if (!reg.test(value)) {
                    errors.push(`${field.name}${field.label} is invalid`);
                }
            }
        }
        return errors;
    });
}

export default validator;
