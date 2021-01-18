export default function validateInfo(values) {

    const errors = {}

    if(!values.firstname.trim()) {
        errors.firstname = 'First name required!'
    }else if(values.firstname.length < 3) {
        errors.firstname = 'The first name usually has more than 2 letters'
    }

    if(!values.lastname.trim()) {
        errors.lastname = 'Last name required!'
    } else if(values.lastname.length < 3) {
        errors.lastname = 'The last name usually has more than 2 letters'
    }
    if(!values.email) {
        errors.email = 'Email required!'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if(!values.number) {
        errors.number = 'Number is required!'
    }  
       
    if(!values.title) {
        errors.title = 'Title is required!'
    }
    if(!values.textarea) {
        errors.textarea = 'Message is required!'
    }


    return errors;
}