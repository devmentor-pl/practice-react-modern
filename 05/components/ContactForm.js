import React, { useReducer} from 'react';
// import { v4 as uuid } from 'uuid';
import FormItem from './FormItem';
// import ValidationRules from '../FormHelpers/ValidationRules';
// import FormValidator from '../FormHelpers/FormValidator';
// import propTypes from 'prop-types';

function reducer(state, action) {
    switch(action.type) {
    case 'send': {
        return {
            ...state,
            send: true
        }
    }
    default:
        return state
    }
}

const initState = {
    send: false   
}

const ContactForm = props => {
// import account from './account';
    // eslint-disable-next-line react/prop-types
    const {formFields} = props;
    const [state, dispatch] = useReducer(reducer, initState)
    const {send} = state; // tutaj nie wiem co dalej - jak pobrać wartości z inputów i przefiltrować je pod kątem errorów. I jak te errory zebrać i wyświetlić. Do omówienia :)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type: 'send'})
    }

    // eslint-disable-next-line react/prop-types
    const formItems = formFields.map(item => {
        const {label, name, type, field, required} = item;
        return (
            // eslint-disable-next-line max-len
            <FormItem key={name} label={label} name={name} type={type} field={field} required={required}/>
        )
    })
    // return (<form noValidate onSubmit={e => submitForm(e)}>
    return (<form noValidate onSubmit={e => handleSubmit(e)}>
        {formItems}
        <button type='submit'>Wyślij</button>
    </form>);
};

export default ContactForm;
