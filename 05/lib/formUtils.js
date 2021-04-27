export const UPDATE_FORM = 'UPDATE_FORM';

export const validateInput = (name, value) => {
    let hasError = false;
    let error = '';
    switch (name) {
        case 'name':
            if (value.trim() === '') {
                hasError = true;
                error = 'Name cannot be empty';
            } else if (!/^[a-zA-Z ]+$/.test(value)) {
                hasError = true;
                error = 'Invalid Name. Avoid Special characters';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'email':
            if (value.trim() === '') {
                hasError = true;
                error = 'Email cannot be empty';
            } else if (
                !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
                    value,
                )
            ) {
                hasError = true;
                error = 'Invalid Email';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'phoneNumber':
            if (!/^[0-9]{9}$/.test(value)) {
                hasError = true;
                error = 'Invalid Phone number. Use 9 digits only';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'subject':
            if (value.trim() === '') {
                hasError = true;
                error = 'You must specify the subject of the message';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'message':
            if (value.trim() === '') {
                hasError = true;
                error = 'Message cannot be empty';
            } else {
                hasError = false;
                error = '';
            }
            break;
        default:
            break;
    }
    return { hasError, error };
};

export const onInputChange = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;

    const keys = Object.keys(formState);
    for (let i = 0; i < keys.length; i += 1) {
        if (Object.prototype.hasOwnProperty.call(formState, keys[i])) {
            const item = formState[keys[i]];
            if (keys[i] === name && hasError) {
                isFormValid = false;
                break;
            } else if (keys[i] !== name && item.hasError) {
                isFormValid = false;
                break;
            }
        }
    }

    dispatch({
        type: UPDATE_FORM,
        data: {
            name,
            value,
            hasError,
            error,
            touched: false,
            isFormValid,
        },
    });
};

export const onFocusOut = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;

    const keys = Object.keys(formState);
    for (let i = 0; i < keys.length; i += 1) {
        if (Object.prototype.hasOwnProperty.call(formState, keys[i])) {
            const item = formState[keys[i]];
            if (keys[i] === name && hasError) {
                isFormValid = false;
                break;
            } else if (keys[i] !== name && item.hasError) {
                isFormValid = false;
                break;
            }
        }
    }

    dispatch({
        type: UPDATE_FORM,
        data: { name, value, hasError, error, touched: true, isFormValid },
    });
};
