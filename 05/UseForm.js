

import {useState} from 'react'
import sendEmail from './sendEmail'

const useForm = (validate) => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        title: '',
        textarea: '',
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validate(values))

        sendEmail(e)
    }


    return { handleChange, handleSubmit, values, errors };
}

export default useForm;