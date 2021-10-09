import validate from './ValidationRules';

export const UPDATE_FORM = 'UPDATE_FORM';

export const handleChange = (name, value, dispatch, formState) => {
    const { hasError, error } = validate(name, value);
    let isFormValid = true;

    for (const key in formState) {
        const item = formState[key];
        if (key === name && hasError) {
            isFormValid = false;
            break;
        } else if (key !== name && item.hasError) {
            isFormValid = false;
            break;
        }
    }

    dispatch({
        type: 'UPDATE_FORM',
        data: {
            name,
            value,
            hasError,
            error,
            touched: false,
            isFormValid
        }
    });
};

export const onFocusOut = (name, value, dispatch, formState) => {
    const { hasError, error } = validate(name, value);
    let isFormValid = true;
    for (const key in formState) {
        console.log(key);
        const item = formState[key];
        console.log(formState[key]);
        if (key === name && hasError) {
            isFormValid = false;
            break;
        } else if (key !== name && item.hasError) {
            isFormValid = false;
            break;
        }
    }

    dispatch({
        type: 'UPDATE_FORM',
        data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid
        }
    });
};
