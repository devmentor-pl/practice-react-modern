/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import React from 'react';
import formFields from '../formFields';

export default class Validator {
    isFirstNameValid = (name, rules) => {
        console.log(rules);
        if (name !== undefined) {
            return true;
        }
        return true;
    };

    isLastNameValid = () => {};

    isEmailValid = (name, rules) => {};
}
