import React, {useReducer, useState} from 'react';
import PropTypes from 'prop-types'

import validate from "./helpToValidate" 

// import account from './account';

const ContactForm = function ContactForm(props) {

    const { fieldsList } = props



    const init = {}
    fieldsList.forEach(({name, defaultValue}) => {
        init[name] = defaultValue
    })


  


    function reducer(state, action) {
        switch(action.type) {
            case "change": {
                return {...state, [action.key]: action.value}
            }
            default:
                return state
        }
    }


    const [state, dispatch] = useReducer(reducer, init)

    const [ errors, setErrors] = useState([])


    function renderFieldsList() {
        return fieldsList.map(({ name, type }) => {
            let tag;
            if (type === 'textarea') {
                tag = (
                    <textarea
                        onChange={(e) => dispatch({ type: 'change', key: name, value: e.target.value })}
                        id={name}
                        name={name}
                        type={type}
                        value={state[name]}
                    />
                );
            } else {
                tag = (
                    <input
                        onChange={(e) => dispatch({ type: 'change', key: name, value: e.target.value })}
                        id={name}
                        name={name}
                        type={type}
                        value={state[name]}
                    />
                );
            }
            return (
                <div>
                    <label htmlFor={name}>{name}</label>
                    {tag}
                </div>
            );
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        setErrors(validate(fieldsList, state));
    }

    function renderErrors() {
        return (
            errors.length > 0 && (
                <ul>
                    {errors.map((message) => (
                        <li>{message}</li>
                    ))}
                </ul>
            )
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            {renderErrors()}
            {renderFieldsList()}
            <div>
                <input type="submit" />
            </div>
        </form>
    );
};

ContactForm.propTypes = {
    fieldsList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        defaultValue: PropTypes.string
    })).isRequired
}


export default ContactForm;
