import React from 'react';
import PropTypes from 'prop-types';

const ContactFormControls = (props) => {
    const { field, onChange, errors, onFocus, value } = props;

    const showError = (label) => {
        const errorsByLabel = errors.filter((item) => item.includes(label));

        return errorsByLabel.map((err, i) => (
            // eslint-disable-next-line
            <p className="controls-box__errors-text" key={i}>
                {err}
            </p>
        ));
    };

    const Tag = field.htmlTag;
    return (
        <div className="form__controls-box controls-box">
            <label htmlFor={field.name} className="controls-box__label">
                {field.required ? `*${field.label}:` : `${field.label}`}
            </label>
            <Tag
                className="controls-box__input"
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                id={field.name}
                onChange={onChange}
                value={value}
                onFocus={onFocus}
            />
            {errors.length > 0 ? (
                <div className="controls-box__errors">{showError(field.label)}</div>
            ) : null}
        </div>
    );
};

ContactFormControls.propTypes = {
    field: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        required: PropTypes.bool,
        pattern: PropTypes.string,
        placeholder: PropTypes.string.isRequired,
        htmlTag: PropTypes.string.isRequired,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContactFormControls;
