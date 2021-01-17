/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */

import React from 'react';
import formFields from '../formFields';

export default class Validator {
    validate(name, value) {
        const { regex, minLength, dataType, errorMsg } = formFields[name].validationRules;

        if (regex && regex.test(value) === false) {
            return errorMsg;
        }

        // if (minLength || value.length < minLength) {
        //     return errorMsg;
        // }
        // if (dataType && typeof value !== dataType) {
        //     return errorMsg;
        // }
        // minLength || value.length < minLength ? errorMsg : null;
        // dataType && typeof value !== dataType ? errorMsg : null;
    }
}
