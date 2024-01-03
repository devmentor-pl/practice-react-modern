import React, { useReducer } from 'react';

const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    errors: {}
};
  
const formReducer = (state, action) => {
    switch (action.type) {
    case 'SET_FIELD':
        return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
        return { ...state, errors: { ...state.errors, [action.field]: action.error } };
    default:
        return state;
    }
};

const ContactForm = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_FIELD', field: name, value });
    };
  
    const validateFields = () => {
        const errors = {};
        if (!state.name) errors.name = 'Name is required';
        if (!state.email) errors.email = 'Email is required';
        if (!state.subject) errors.subject = 'Subject is required';
        if (!state.message) errors.message = 'Message is required';
        return errors;
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateFields();
        if (Object.keys(errors).length === 0) {
            // eslint-disable-next-line no-console
            console.log('Form data:', state);
        } else {
            Object.keys(errors).forEach(key => {
                dispatch({ type: 'SET_ERROR', field: key, error: errors[key] });
            });
        }
      
    };
  
    return (
        <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <input 
                type="text" 
                name="name" 
                value={state.name} 
                onChange={handleChange} 
                placeholder="Name" 
                required 
            />
            {state.errors.name && <div>{state.errors.name}</div>}
    
            {/* Email Field */}
            <input 
                type="email" 
                name="email" 
                value={state.email} 
                onChange={handleChange} 
                placeholder="Email" 
                required 
            />
            {state.errors.email && <div>{state.errors.email}</div>}
    
            {/* Phone Number Field */}
            <input 
                type="tel" 
                name="phone" 
                value={state.phone} 
                onChange={handleChange} 
                placeholder="Phone Number"
            />
    
            {/* Subject Field */}
            <input 
                type="text" 
                name="subject" 
                value={state.subject} 
                onChange={handleChange} 
                placeholder="Subject" 
                required 
            />
            {state.errors.subject && <div>{state.errors.subject}</div>}
    
            {/* Message Field */}
            <textarea 
                name="message" 
                value={state.message} 
                onChange={handleChange} 
                placeholder="Your message" 
                required 
            />
            {state.errors.message && <div>{state.errors.message}</div>}
            <button type="submit">Submit</button>
        </form>
    );
}
  
export default ContactForm;