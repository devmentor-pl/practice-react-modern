import fields from './formFields';

export const convertArrToObj = (arr) => Object.assign({}, ...arr);

export const getInputsNames = () => fields.map((field) => field.name);

export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

export const setInputBorder = (inputName, formState) => {
    if (formState[inputName].isValid && formState[inputName].isFill) {
        return { border: '1px solid green' };
    }
    if (!formState[inputName].isValid && formState[inputName].isFill) {
        return { border: '1px solid red' };
    }
    return { border: '1px solid black' };
};
