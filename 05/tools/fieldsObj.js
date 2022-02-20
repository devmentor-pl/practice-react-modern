import { getNameRegex, getEmailRegex, getPhoneRegex } from './validationHelper';

const fields = [
    {
        name: 'userName',
        type: 'text',
        placeholder: 'Your name',
        validationRules: { isRequired: true, regex: getNameRegex() },
    },
    {
        name: 'userEmail',
        type: 'text',
        placeholder: 'Your email',
        validationRules: { isRequired: true, regex: getEmailRegex() },
    },
    {
        name: 'userPhone',
        type: 'number',
        placeholder: 'Your phone number',
        validationRules: { isRequired: false, regex: getPhoneRegex() },
    },
    {
        name: 'userSubject',
        type: 'text',
        placeholder: 'Your subject',
        validationRules: { isRequired: true, regex: null },
    },
    {
        name: 'userMessage',
        type: 'textarea',
        placeholder: 'Your message',
        validationRules: { isRequired: true, regex: null },
    },
];

export default fields;
