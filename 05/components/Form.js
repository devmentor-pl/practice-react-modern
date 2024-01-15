import React from 'react';
import PropTypes from 'prop-types';

// import ContactForm from './ContactForm';

function Form({ onChange, onSubmit, data, fields }) {
    const inputs = fields.map((field) => (
        <label htmlFor={field.name} key={field.name}>
            <input
                style={{ padding: '5px' }}
                placeholder={field.placeholder}
                type={field.type}
                id={field.id}
                name={field.name}
                value={field.value}
                onChange={onChange}
            />
        </label>
    ));

    return (
        <form
            className="form"
            style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px' }}
            onSubmit={onSubmit}
        >
            {inputs}

            <textarea
                style={{ padding: '5px' }}
                placeholder="Wpisz wiadomość..."
                name="message"
                value={data.message}
                onChange={onChange}
                rows="5"
                cols="33"
            />
            <input type="submit" value="Dodaj Spotkanie" />
        </form>
    );
}

Form.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            id: PropTypes.string,
            name: PropTypes.string,
            placeholder: PropTypes.string,
        }),
    ),
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    data: PropTypes.shape({
        username: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        // Add other prop types for your data fields if necessary
    }).isRequired,
};

Form.defaultProps = {
    fields: [],
};

export default Form;
