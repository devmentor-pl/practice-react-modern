/* eslint-disable no-constant-condition */
/* eslint-disable max-len */
import React from 'react';
import useAttributes from '../hooks'

const FormItem = props => {
    const attributes = useAttributes()
    // eslint-disable-next-line react/prop-types
    const {label, name, type, field, required} = props;

    const createField = () => { 
        if(field === 'input') {
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            return <input {...attributes} type={type} id={name} required={required}/>
        } 
        return <textarea id={name}/>
        
    }
    return (
        <>
            <label htmlFor={name}>
                {label}: 
                {createField()}
            </label>
        </>
    )
}

export default FormItem