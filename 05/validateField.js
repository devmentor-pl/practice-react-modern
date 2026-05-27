import fields from "./formData";

const validateField = (name, value) => {
    const field = fields.find((f) => f.name === name);
    if(!field) return '';

    if (field.isRequired && value.trim() === '') {
        return field.error;
    }
    
    if (field.regex && !field.regex.test(value)) {
        return field.error;
    }

    return '';
}

export default validateField;