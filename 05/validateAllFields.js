import fields from "./formData";
import validateField from "./validateField";

const validateAllFields = (values) => {
    const errors = {};
    const touched = {};

    fields.forEach(field => {
        errors[field.name] = validateField(field.name, values[field.name]);
        touched[field.name] = true;
    })

    return {errors, touched}
}

export default validateAllFields;