/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';


const FormItem = (props) => {
    const { label, name, type, field, required, dispatch, value } = props;

    const createField = () => {
        if (field === 'input') {
            return (
                <input
                    name={name}
                    type={type}
                    id={name}
                    required={required}
                    value={value}
                    onChange={(e) => dispatch({ type: name, payload: e.target.value })}
                />
            );
        }
        return <textarea id={name} name={name} required={required} value={value} onChange={(e) => dispatch({ type: name, payload: e.target.value })}/>;
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
