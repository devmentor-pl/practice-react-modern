const formValidation = (value) => {
    console.log(value);

    const errors = {};
    const regExpName = /^[a-zA-Z]{2,30}/
    const regExpEmail = /^[-\w.]+@([-\w]+\.)+[a-z]+$/i;

    if(!value.firstName.match(regExpName)){
        errors.firstName = "First name is required, min 2 characters"
    }

    if(!value.lastName.match(regExpName)){
        errors.lastName = "Last name is required, min 2 characters"
    }

    if(!value.email){
        errors.email = "Email is required"
    } else if (!value.email.match(regExpEmail)){
        errors.email = "Email is invalid"
    }

    if(!value.subject){
        errors.subject = "Subject is required"
    }

    if(!value.message){
        errors.message = "Message is required"
    }

    return errors;
}

export default formValidation;