import React, {useReducer, useState} from 'react';
import inputsData from './inputs';
// import account from './account';

function ContactForm() {
    const init = { firstName: '', secondName: '', email: '', number: '', subject: '', message: ''};
    const reducer = (state, {name, value}) => ({...state, [name]: value});
    const [state, dispatch] = useReducer(reducer, init);
    const [infoState, setInfoState] = useState(false);
    const renderInputs = (data) => data.map( (inputData) => {
        const {name, type, label, isRequired} = inputData;
        return (
            <label style={{display:'flex', flexDirection: 'column', alignItems: 'center'}} htmlFor={name} key={name}>
                {label}
                <input style={{textAlign: 'center'}} type={type} name={name} id={name} required={isRequired} onChange={ (e) => dispatch( e.target ) } value={state[name]} />
            </label>
        )
    });

    const validate = (e) => {
        e.preventDefault();
        setInfoState([]);
        const errors = [];

        inputsData.forEach( (inputData) => {
            const {name, pattern, errorMessage} = inputData;
            
            const inputValue = e.target.elements[name].value;
            const isValueCorrect = pattern.test(inputValue);
            
            if(!isValueCorrect) {
                errors.push(errorMessage);
            } 
        });

        if(errors.length !== 0) {
            errors.forEach( (error) => {
                setInfoState(value => [...value, error])
            });
        } else {
            const validationOkMessage= 'The email has been sent';
            setInfoState([validationOkMessage])
        }

    }

    const renderInfo= () => {
        if(infoState) {
            return infoState.map( error => <li key={error}>{error}</li>)
        } 
        return null;
    }

    const style = {
        paddingLeft: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        listStyle: 'none',
        gap: '5px',
    }
    
    return (
        <form style={style}  onSubmit={ (e) => {validate(e)} }>
            {renderInputs(inputsData)}
            <input type='submit'/>
            <ul style={style}>{renderInfo()}</ul>
        </form>
    );
}

export default ContactForm;