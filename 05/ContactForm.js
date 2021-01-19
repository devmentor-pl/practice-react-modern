import React from 'react';
import useForm from './UseForm'
import validate from './validateInfo'
import './form.css'

const ContactForm = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate)


 
   
    return (

        <div className="form-container" >
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="title">Signup</h1>

                <div className="form-inputs">
                    <label htmlFor="firstname" className='form-label'>Your first name:</label>
                    <input 
                        id="firstname"
                        type="firstname"
                        name="firstname"
                        placeholder="your first name" 
                        value={values.firstname}
                        onChange={handleChange}
                        className="input"
                    />
                    {errors.firstname && <p className="error">{errors.firstname}</p>}
                </div>
                 


                <div className="form-inputs">
                    <label htmlFor="firstname" className='form-label'>Your last name:</label> 
                    <input 
                        id="lastname"
                        type="lastname"
                        name="lastname"
                        placeholder="your last name" 
                        value={values.lastname}
                        onChange={handleChange}
                        className="input"
                    />
                    {errors.lastname && <p className="error">{errors.lastname}</p>}
                </div>
                 

                <div htmlFor="lastname" className="form-inputs">
                    <label className='form-label' >Your E-mail:</label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your Email"
                        value={values.email}
                        onChange={handleChange}
                        className="input"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="number" className='form-label' >Your number:</label>
                    <input 
                        id="number"
                        type="number"
                        pattern="[0-9]*"
                        name="number"
                        placeholder="your number"
                        value={values.number}
                        onChange={handleChange}
                        className="input"
                    />
                    {errors.number && <p className="error">{errors.number}</p>}
                </div>


                <div className="form-inputs">
                    <label htmlFor="title" className='form-label' >Title of message:</label>
                    <input 
                        id ="title"
                        type="title"
                        name="title"
                        placeholder="your title of message"
                        value={values.title}
                        onChange={handleChange}
                        className="input"
                    />
                    {errors.title && <p className="error">{errors.title}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="textarea" className='form-label' >Message:</label>
                    <textarea 
                        id="textarea"
                        type="textarea"
                        name="textarea"
                        placeholder="your title of message"
                        value={values.textarea}
                        onChange={handleChange}
                        className="input"
                    />
                    {errors.textarea && <p className="error">{errors.textarea}</p>}
                </div>


            
                <button  className="btn" type="submit">send!</button>
                {/* <span>Everything went well! THANKS</span> */}
            </form>
        </div>


    )
};

export default ContactForm;
