import React,{useReducer} from 'react';
// import './styles.css';

const stylesContainer ={
    display:'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection:'column'
}

const stylesForm ={
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
}

const stylesInputs ={
    margin:'15px',
    padding:'5px',
    border:'none',
    borderBottom:'1px solid',
    borderBottomColor: 'black', 
}


// import account from './account';

function ContactForm () {
    // console.log(account);

    const initialState = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        subject:'',
        message:'',
    }

    const reducer = (state,{name,value}) => {
        const newState = {...state}
        newState[name] = value
        return newState
    }

    const [state, dispatch] = useReducer(reducer,initialState)

    const {firstName,lastName,email,phone,subject,message} = state;

    function formValidation(){

    }

    function handleSubmit(e) {
        e.preventDefault()
        if(formValidation){
            return alert('Wiadomosc została wysłana')
        }
        return false
    }

    return (
        <div style={stylesContainer}>
            <h2 className='form__header'>Write a message:</h2>
            <form style={stylesForm}>

                <input
                    className='form__input'
                    style={stylesInputs}
                    type='text'
                    name='firstName'
                    value={firstName}
                    placeholder='First Name'
                    onChange={e=>dispatch(e.target)}
                    required
                />

                <input
                    className='form__input'
                    style={stylesInputs}
                    type='text'
                    name='lastName'
                    value={lastName}
                    placeholder='Last Name'
                    onChange={e=>dispatch(e.target)}
                    required
                />

                <input
                    className='form__input'
                    style={stylesInputs}
                    type='email'
                    name='email'
                    value={email}
                    placeholder='E-mail'
                    onChange={e=>dispatch(e.target)}
                    required
                />

                <input
                    className='form__input'
                    style={stylesInputs}
                    type='tel'
                    name='phone'
                    value={phone}
                    placeholder='Phone number'
                    onChange={e=>dispatch(e.target)}
                />

                <input
                    className='form__input'
                    style={stylesInputs}
                    type='text'
                    name='subject'
                    value={subject}
                    placeholder='Subject'
                    onChange={e=>dispatch(e.target)}
                    required
                />

                <textarea
                    className='form__input'
                    style={stylesInputs}
                    type='text'
                    name='message'
                    value={message}
                    placeholder='Message...'
                    onChange={e=>dispatch(e.target)}
                    required
                />
                <button type='submit' onClick={handleSubmit}>Send</button>
            </form>
        </div>
    )
};

export default ContactForm;
