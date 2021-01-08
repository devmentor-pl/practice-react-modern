/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import FormItem from './FormItem';
import ValidationRules from '../FormHelpers/ValidationRules';
import FormValidator from '../FormHelpers/FormValidator';
// import account from './account';
// import propTypes from 'prop-types';

const ContactForm = (props) => {
    const initState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        title: '',
        message: '',
        errors: [],
    };
    const { formFields } = props;
    const formFieldsNames = formFields.map(field => field.name)

    function reducer(state, action) {
        switch (action.type) {
        case action.type: {
            return {
                ...state,
                [action.type]: action.payload,
            };
        }
        case 'errors': {
            return {
                ...state,
                errors: [action.payload]
            }
        }
        default: return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initState);

    const createErrorItem = () => {
        return state.errors.map(error => {
            return (
                <li key={error.id}>{error.msg}</li>
            )  
        })
        
    }

    const createError = (rules, element) => {
        return {
            msg: rules[element].errMsg,
            id: uuid()
        }
    }

    const validateValues = (elementNames) => {
        const validFuncs = new FormValidator();
        const rules = new ValidationRules();
        const errorsArr = [];
        elementNames.forEach(elementName => {
            const isValueCorrect = validFuncs[`is${  rules[elementName].type}`](state[elementName], rules[elementName].options)
            if (!isValueCorrect) {
                errorsArr.push(createError(rules, elementName))
            }
        })
        return errorsArr
        
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // wiem, że z tym wysyłanie się nie powiedzie ;) (Chciałabym przy okazji omawiania zadań o tym porozmawiać)
        const errors = validateValues(formFieldsNames);
        dispatch({type: 'errors', payload: errors});
    };

    const formItems = formFields.map((item) => {
        const { label, name, type, field, required } = item;
        return (
            <FormItem
                // {...item}
                key={name}
                label={label}
                name={name}
                type={type}
                field={field}
                required={required}
                dispatch={dispatch}
                value={state[name]}
            />
        );
    });
    return (
        <form noValidate onSubmit={(e) => handleSubmit(e)}>
            {formItems}
            <button type="submit">Wyślij</button>
            {state.errors.length !== 0 && <ul>{createErrorItem()}</ul>}
        </form>
    );
};

export default ContactForm;
