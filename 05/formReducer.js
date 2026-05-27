import fields from './formData';
import initialState from './formInitialState';
import validateAllFields from './validateAllFields';
import validateField from './validateField';

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE': {
            const {name, value} = action;
            const field = fields.find((f) => f.name === name);

            if (field.liveRegex && !field.liveRegex.test(value)) return state;

            return {
                ...state,
                values: { ...state.values, [name]: value },
                errors: { ...state.errors, [name]: validateField(name, value) },
            };
        }

        case 'BLUR': {
            return {
                ...state,
                touched: { ...state.touched, [action.name]: true },
            };
        }

        case 'VALIDATE_ALL': {
            const {errors, touched} = validateAllFields(state.values)

            return {
                ...state,
                errors,
                touched,
            }
        }

        case 'RESET': {
            return initialState;
        }

        default:
            return state;
    }
};

export default reducer;