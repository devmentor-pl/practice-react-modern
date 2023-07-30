import React from 'react';
import PropTypes from 'prop-types';

function TextField(props) {
    const { text, name, value, onChange } = props;
    return (
        /* eslint-disable-next-line jsx-a11y/label-has-associated-control */
        <label>
            {text}
            <input type="text" name={name} value={value} onChange={onChange} />
        </label>
    );
}

TextField.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TextField;
