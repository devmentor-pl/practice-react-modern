export default function validate(name, value) {
    let hasError = false;
    let error = '';
    switch (name) {
        case 'fullName':
            if (!value) {
                hasError = true;
                error = 'Name and surname is required';
            } else if (!/^[a-z ,.'-]+$/i.test(value)) {
                hasError = true;
                error = 'Invalid name and surname';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'email': {
            if (!value) {
                hasError = true;
                error = 'Email is required';
            } else if (
                !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
                    value
                )
            ) {
                hasError = true;
                error = 'Invalid email';
            } else {
                hasError = false;
                error = '';
            }
            break;
        }
        case 'phone': {
            if (!value) {
                hasError = true;
                error = 'Phone is required';
            } else if (!/^0([1-6][0-9]{8,10}|7[0-9]{9})$/.test(value)) {
                hasError = true;
                error = 'Invalid phone number';
            } else {
                hasError = false;
                error = '';
            }
            break;
        }
        case 'title': {
            if (!value) {
                hasError = true;
                error = 'Title is required';
            } else {
                hasError = false;
                error = '';
            }
            break;
        }
        case 'message': {
            if (!value) {
                hasError = true;
                error = 'Message cannot be empty';
            } else {
                hasError = false;
                error = '';
            }
            break;
        }
        default:
            break;
    }

    return { hasError, error };
}
