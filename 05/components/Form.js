import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import PropTypes from 'prop-types';

function Form({ onChange, onSubmit, fields }) {
    const form = useForm();
    const { register, handleSubmit, control, formState } = form;
    const { errors } = formState;

    const inputs = fields.map((field) => (
        <div>
            <label htmlFor={field.name} key={field.name}>
                <input
                    style={{ padding: '5px' }}
                    placeholder={field.placeholder}
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    // value={field.value}
                    onChange={onChange}
                    required
                    /* eslint-disable-next-line react/jsx-props-no-spreading */
                    {...register(field.name, {
                        pattern: {
                            value: field.pattern,
                            message: field.message,
                        },
                        required: {
                            value: true,
                        },
                    })}
                />
                <p>{errors[field.name]?.message}</p>
            </label>
        </div>
    ));

    return (
        <div>
            <form
                // noValidate
                className="form"
                style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px' }}
                onSubmit={handleSubmit(onSubmit)}
            >
                {inputs}

                <textarea
                    style={{ padding: '5px' }}
                    placeholder="Wpisz wiadomość..."
                    name="message"
                    // value={data.message}
                    onChange={onChange}
                    rows="5"
                    cols="33"
                    /* eslint-disable-next-line react/jsx-props-no-spreading */
                    {...register('message', {
                        required: {
                            value: true,
                        },
                    })}
                />
                <p>{errors.message?.message}</p>
                <input type="submit" value="Wyślij" />
            </form>
            <DevTool control={control} />
        </div>
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
