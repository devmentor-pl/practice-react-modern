/* eslint-disable no-useless-escape */
export const formData = [
    {
        name: 'firstName',
        label: 'firstName:',
        errMessage: 'Invalid data, require at least 2 characters',
        isRequired: true,
        minimumLengthIsEqual: 2,
        id: 1,
    },
    {
        name: 'lastName',
        label: 'lastName:',
        errMessage: 'Invalid data, require at least 2 characters',
        isRequired: true,
        minimumLengthIsEqual: 2,
        id: 2,
    },
    {
        name: 'email',
        label: 'Email:',
        errMessage: 'Invalid email',
        regExp: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        isRequired: true,
        id: 3,
    },
    {
        name: 'phoneNumber',
        label: 'phoneNumber:',
        errMessage: 'Invalid data, number needs 9 digits',
        regExp: /^\d{9}$/g,
        isRequired: false,
        id: 4,
    },
    {
        name: 'topic',
        label: 'topic:',
        errMessage: 'Invalid data, topic require at least 2 characters',
        isRequired: true,
        minimumLengthIsEqual: 2,
        id: 5,
    },
    {
        name: 'message',
        label: 'message:',
        errMessage: 'Invalid data, message require at least 2 characters',
        isRequired: true,
        minimumLengthIsEqual: 2,
        id: 6,
    },
];

export default formData;
