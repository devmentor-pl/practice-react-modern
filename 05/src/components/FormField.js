import React from 'react';
import PropTypes from 'prop-types';

function FormField(props) {
    const {
        options: {
            id,
            label,
            name,
            type,
            placeholder,
            tagName,
            errorsMessages,
            styles: { div, input, small },
            value,
            onChange,
            rows,
        },
    } = props;

    return (
        <div style={div}>
            <label htmlFor={id}>{label}</label>
            {tagName === 'textarea' ? (
                <textarea
                    style={input}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    rows={rows}
                    value={value}
                    onChange={(e) => onChange(e.target)}
                />
            ) : (
                <input
                    style={input}
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target)}
                />
            )}
            {errorsMessages && errorsMessages.length !== 0 && (
                <small style={small}>{errorsMessages}</small>
            )}
        </div>
    );
}

FormField.propTypes = {
    options: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        placeholder: PropTypes.string.isRequired,
        tagName: PropTypes.string,
        rows: PropTypes.number,
        errorsMessages: PropTypes.arrayOf(PropTypes.string),
        styles: PropTypes.objectOf(PropTypes.object),
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
    }).isRequired,
};

export default FormField;
