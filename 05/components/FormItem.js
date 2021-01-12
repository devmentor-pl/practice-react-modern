/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';


const FormItem = (props) => {
    const { label, name, type, field, required, dispatch, value } = props;

    const createField = () => {
        const ElementName = field;        
        return (
            <ElementName
                name={name}
                type={type}
                id={name}
                required={required}
                value={value}
                onChange={(e) => dispatch({ type: name, payload: e.target.value })}
            />
        );
    };
    return (
        <>
            <label htmlFor={name}>
                {label}:{createField()}
            </label>
        </>
    );
};

export default FormItem;
