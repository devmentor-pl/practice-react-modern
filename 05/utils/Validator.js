/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */

import React from 'react';
import formFields from '../formFields';

export default class Validator {
    validate(state) {
        const errorList = [];
        const fieldNames = Object.keys(state); // array firstname, lastname, email, tel...
        const values = Object.values(state); // array

        const addError = err => {
            if (!errorList.includes(err)) {
                errorList.push(err);
            }
        };

        fieldNames.forEach(field => {
            const fieldProperties = formFields[field];

            if (fieldNames.name === 'errors') {
                return;
            }
            if (fieldProperties.name === field) {
                const {
                    errorMsg,
                    regex,
                    minLength,
                    dataType,
                    isEmpty,
                } = fieldProperties.validationRules;
                const value = state[fieldProperties.name];

                if (regex && !regex.test(value)) {
                    addError(errorMsg);
                }
                if (minLength && value.length < minLength) {
                    addError(errorMsg);
                }
                if (dataType && typeof value !== dataType) {
                    addError(errorMsg);
                }
            }
        });
        return errorList;
    }
}
