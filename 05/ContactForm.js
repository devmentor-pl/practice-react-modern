import React,{useReducer} from 'react';
import checkCorrectFieldsData from './Validation';

const ContactForm = () => {

    const init = {
        names: "",
        email: "",
        phone: "",
        subject: "",
        userMessage: ""
    }
    const reducer = (state, action) => {
        
        const newState = {...state}
        let id; let value;

        switch (action.type) {
        case 'resetState' :
            return action.init;
        default:
            id = action.id;
            value = action.value;
            return {...newState, [id]:value}
        }
    }

    const [state, dispatch] =  useReducer(reducer, init);
    const {names,email,phone,subject,userMessage} =  state;

    const handleSubmit = e => {
        e.preventDefault();
        if(checkCorrectFieldsData(state)){
            dispatch({ type: 'resetState', init });   
        };
    }

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
    };

    return (
        <form style={formStyles} onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="names">Name and Surname</label>
            <input id="names" value={names} onChange={ e => dispatch(e.target)} />

            <label htmlFor='email'>Email</label>
            <input id="email" value={email} onChange={ e => dispatch(e.target)} />

            <label htmlFor='phone'>Phone Number</label>
            <input id="phone" value={phone} onChange={ e => dispatch(e.target)} />

            <label htmlFor='subject'>Subject</label>
            <input id="subject" value={subject} onChange={ e => dispatch(e.target)} />

            <label htmlFor='userMessage'>Your Message</label>
            <textarea id="userMessage" value={userMessage} onChange={ e => dispatch(e.target)} />

            <input type='submit' value="Send" />

        </form>
    );
};

export default ContactForm;
