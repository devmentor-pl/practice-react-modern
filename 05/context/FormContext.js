import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';
import validateFields from '../components/validation';

const { createContext, useReducer, useContext } = require('react');

const FormContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'onChange': {
            const { name, value } = action.payload;

            return {
                ...state,
                formFields: {
                    ...state.formFields,
                    [name]: {
                        error: '',
                        value,
                    },
                },
            };
        }

        case 'onValidate': {
            const { validatedFields, isFormValid } = validateFields(
                state.formFields,
                action.payload
            );

            return {
                ...state,
                formFields: validatedFields,
                isFormValid,
            };
        }

        case 'onClear': {
            return action.payload;
        }

        default:
            throw new Error('Unknown action');
    }
};

function getInitialState(fields) {
    return {
        formFields: Object.fromEntries(
            fields.map((field) => [field.name, { value: '', error: '' }])
        ),
        isFormValid: false,
    };
}

function FormProvider({ children, fields }) {
    const [state, dispatch] = useReducer(reducer, getInitialState(fields));

    const clearForm = useCallback(() => {
        dispatch({ type: 'onClear', payload: getInitialState(fields) });
    }, [dispatch, fields]);

    const validateForm = useCallback(() => {
        dispatch({ type: 'onValidate', payload: fields });
    }, [dispatch, fields]);

    const onInputChange = useCallback(
        (e) => {
            dispatch({ type: 'onChange', payload: { value: e.target.value, name: e.target.name } });
        },
        [dispatch]
    );

    const contextValues = useMemo(
        () => ({
            state,
            fields,
            clearForm,
            validateForm,
            onInputChange,
        }),
        [state, fields, clearForm, validateForm, onInputChange]
    );

    return <FormContext.Provider value={contextValues}>{children}</FormContext.Provider>;
}

const fieldsTypes = PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        required: PropTypes.bool,
        minLength: PropTypes.number,
        pattern: PropTypes.instanceOf(RegExp),
        type: PropTypes.oneOf(['text', 'email', 'number', 'textarea']),
    })
).isRequired;

FormProvider.propTypes = {
    children: PropTypes.node,
    fields: fieldsTypes,
};

function useForm() {
    const context = useContext(FormContext);

    if (context === undefined) throw new Error('FormContext was used outside the FromProvider');
    return context;
}

export { fieldsTypes, FormProvider, useForm };
