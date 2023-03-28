/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react';

// import account from './account';

function ContactForm() {
    // console.log(account);
    const [error, setError] = useState([])
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        telephone: '',
        topic: '',
        message: ''
    })


    // eslint-disable-next-line no-shadow
    const validate = form => {    
        if(!form.email)
        {
            return "Email jest wymagany"
        }
        if(!/^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(form.email))
        {
            return "Niepoprawny email"
        }
        if(!form.name)
        {
            return "Imię jest wymagane"
        }
        if(form.name.length<2)
        {
            return "Imię jest niepoprawne"
        }
        if(!form.lastName)
        {
            return "Nazwisko jest wymagane"
        }
        if(form.lastName.length<2)
        {
            return "Nazwisko jest niepoprawne"
        }
        if(!form.topic)
        {
            return "Temat jest wymagane"
        }
        if(!form.message)
        {
            return "Wiadomosc nie moze byc pusta"
        }
        if(form.message.length<2)
        {
            return "Wiadomosc jest za krotka"
        }
        return null
    }
        
    const handleSubmit = (e)=> {
        e.preventDefault();
        // eslint-disable-next-line no-console
        console.log(error);
        const errorMessage = validate(form);
        if(errorMessage) {
            setError([errorMessage]);
        } else {
            setError(["Wysłano poprawnie"]);
            setForm({
                name: '',
                lastName: '',
                email: '',
                telephone: '',
                topic: '',
                message: ''
            });
        }
        return null;
    }
    const formUpdate = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {error && (
                <ul>
                    {error.map(item => (
                        <li key={item}  style={{color: 'red'}}>{item}</li>
                    ))}
                </ul>
            )}
            <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
                <label>
                    Imię:
                    <input type="text" name='name' onChange={formUpdate} value={form.name}/>
                </label>
                <label>
                    Nazwisko:
                    <input type="text" name='lastName' onChange={formUpdate} value={form.lastName}/>
                </label>
                <label>
                    email:
                    <input type="text" name='email' onChange={formUpdate} value={form.email}/>
                </label>
                <label>
                    telefon:
                    <input type="number" name='telephone' onChange={formUpdate} value={form.telephone}/>
                </label>
                <label>
                    temat:
                    <input type="text" name='topic' onChange={formUpdate} value={form.topic}/>
                </label>
                <textarea name="message" cols="30" rows="10" placeholder='Treść wiadomości...' onChange={formUpdate} value={form.message}/>
                <input type="submit" />
            </form>
        </>
    );
}

export default ContactForm;
