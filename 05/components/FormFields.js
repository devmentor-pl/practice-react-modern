import React from 'react';

import { useForm } from '../context/FormContext';

import FormRow from './FormRow';
import Label from './Label';
import Input from './Input';

function FormFields() {
    const formFieldStyle = {
        display: 'grid',
        gap: '1rem',
    };

    const { fields } = useForm();

    return (
        <div style={formFieldStyle}>
            {fields.map((field) => {
                const { label, name, type } = field;

                return (
                    <FormRow key={field.name}>
                        <Label htmlFor={name}>{label}</Label>
                        <Input name={name} id={name} type={type} />
                    </FormRow>
                );
            })}
        </div>
    );
}

export default FormFields;
