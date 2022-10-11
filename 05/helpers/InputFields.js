const inputFields = [{
    isReq: true,
    name: 'firstName',
    type: 'text',
    pattern: /[a-zA-Z]{2,}/,
    label: 'firstName',
    labelFieldName:'First name:',
    errorType: 'Incorrect Name',
    id: 1
}, {
    isReq: true,
    name: 'lastName',
    type: 'text',
    pattern: /[a-zA-Z]{2,}/,
    label: 'lastName',
    labelFieldName:'Last name:',
    errorType: 'Incorrect Surname',
    id: 2
}, {
    isReq: true,
    name: 'email',
    type: 'text',
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    label: 'email',
    labelFieldName:'Email:',
    errorType: 'Incorrect Email',
    id: 3
}, {
    isReq: false,
    name: 'phoneNumber',
    type: 'text',
    pattern: /^\s*(?:\+?(\d{1,3}))?/,
    label: 'phoneNumber',
    labelFieldName:'Phone number:',
    errorType: 'Incorrect phone number',
    id:4
}, {
    isReq: true,
    name: 'topicOfMessage',
    type: 'text',
    pattern: /[\s\S]*/,
    label: 'topicOfMessage',
    labelFieldName:'Topic:',
    errorType: 'This field can not be empty',
    id: 5
}, {
    isReq: true,
    name: 'message',
    type: 'text',
    pattern: /[\s\S]*/,
    label: 'message',
    labelFieldName:'Message:',
    errorType: 'This field can not be empty',
    id: 6
}];

export default inputFields;