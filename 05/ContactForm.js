import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types'
import validate from './validate';

const ContactForm = function ContactForm(props) {
    const { inputFields } = props
    const init = {}
    inputFields.forEach(({ name, value }) => {
        init[name] = value
    })
    
    function reducer(state, action) {
        switch (action.type) {
            case 'change': {
                return { ...state, [action.key]: action.value }
            }
            default:
                return state
                
        }
    }
    
    const [state, dispatch] = useReducer(reducer, init)
    const [errors, setErrors] = useState([])
    
    function renderInputFields() {
        return inputFields.map(({ name, type }) => {
            if (type === 'textarea') {
                return (
                    <div>
                        <label htmlFor={name}>
                            {name}
                            <textarea
                                id={name}
                                onChange={e => dispatch({ type: 'change', key: name, value: e.target.value })}
                                value={state[name]}
                            />
                        </label>
                    </div>
                )
            }
            return (
                <div>
                    <label htmlFor={name}>
                        {name}
                        <input
                            onChange={e => dispatch({ type: 'change', key: name, value: e.target.value })}
                            id={name}
                            type={type}
                            name={name}
                            value={state[name]}
                        />
                    </label>
                </div>
            )

        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        setErrors(validate(inputFields, state))
    }

    function renderErrors() {
        return errors.length > 0 ? <ul>{errors.map(error => <li>{error}</li>)}</ul> : null
    }
   
    return <form onSubmit={handleSubmit}>
        {renderInputFields()}
        <div>
            <input type="submit" />
        </div>
        {renderErrors()}   
    </form>;
};

ContactForm.propTypes = {
    inputFields: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.string
    })
    ).isRequired
}

export default ContactForm;
