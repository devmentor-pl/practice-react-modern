import fields from './formData';

const initialState = {
    values: fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}),
    errors: fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}),
    touched: fields.reduce((acc, field) => ({ ...acc, [field.name]: false }), {}),
};

export default initialState;