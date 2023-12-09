import React from 'react';

const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    errors: {},
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          [action.field]: action.value,
        };
      case 'BLUR':
        return {
          ...state,
          errors: {
            ...state.errors,
            [action.field]: validateField(action.field, action.value),
          },
        };
      default:
        return state;
    }
  };
  
  const validateField = (field, value) => {
    switch (field) {
      case 'name':
      case 'subject':
      case 'message':
        return value.trim() === '' ? 'To pole jest wymagane.' : '';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Nieprawidłowy adres e-mail.';
      default:
        return '';
    }
  };

const ContactForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleBlur = (e) => {
    dispatch({
      type: 'BLUR',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Imię i nazwisko:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {state.errors.name && <div className="error">{state.errors.name}</div>}
      </div>
      {/* Pozostałe pola formularza analogicznie */}
      <div>
        <label htmlFor="email">Adres e-mail:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {state.errors.email && <div className="error">{state.errors.email}</div>}
      </div>
      {/* Pozostałe pola formularza analogicznie */}
      <div>
        <button type="submit">Wyślij</button>
      </div>
    </form>
  );

};

export default ContactForm;
