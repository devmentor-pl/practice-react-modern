const formValidation = (values) => {
    console.log(values);

    const errors = {};
    const regExpName = /^[a-zA-Z]{2,30}/
    const regExpEmail = /^[-\w.]+@([-\w]+\.)+[a-z]+$/i;

    if(!values.firstName.match(regExpName)){
        errors.firstName = "First name is required, min 2 characters"
    }

    if(!values.lastName.match(regExpName)){
        errors.lastName = "Last name is required, min 2 characters"
    }

    if(!values.email){
        errors.email = "Email is required"
    } else if (!values.email.match(regExpEmail)){
        errors.email = "Email is invalid"
    }

    if(!values.subject){
        errors.subject = "Subject is required"
    }

    if(!values.message){
        errors.message = "Message is required"
    }

    return errors;
}

export default formValidation;