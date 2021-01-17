import React from 'react';
import formFields from '../formFields';
/* eslint-disable no-unused-vars */

export default class Validator {
    isFirstNameValid = name => {
        if (name !== undefined) {
            return true;
        }
    };
}
