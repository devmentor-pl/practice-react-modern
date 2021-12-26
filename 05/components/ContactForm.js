import React, { useReducer, useState } from 'react';
import FormField from './FormField';
import DataValidator from '../helpers/DataValidator';
import fields from '../helpers/formFields';
import { convertArrToObj, getInputsNames, isObjectEmpty } from '../helpers/helpersFunctions';
import sendMessage from '../helpers/formSender';
import ACTIONS from '../helpers/actions';
import styles from '../helpers/styles';

const ContactForm = () => {
    const createStateData = () =>
        fields.map((field) => {
            const { name } = field;
            return {
                [name]: {
                    value: '',
                    isValid: true,
                    isFill: false,
                },
            };
        });

    const createInitStateObj = () => convertArrToObj(createStateData());

    const reducer = (state, action) => {
        const { type } = action;
        switch (type) {
            case ACTIONS.CHANGE_VALUE: {
                const {
                    payload: { name, value },
                } = action;
                return {
                    ...state,
                    [name]: {
                        ...state[name],
                        value,
                    },
                };
            }
            case ACTIONS.SET_INVALID: {
                const {
                    payload: { name },
                } = action;
                return {
                    ...state,
                    [name]: {
                        ...state[name],
                        isValid: false,
                        isFill: true,
                    },
                };
            }
            case ACTIONS.SET_VALID: {
                const {
                    payload: { name },
                } = action;
                return {
                    ...state,
                    [name]: {
                        ...state[name],
                        isValid: true,
                        isFill: true,
                    },
                };
            }
            case ACTIONS.CLEAR_FORM:
                return createInitStateObj();
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, createInitStateObj());
    const [errors, setErrors] = useState({});
    const [info, setInfo] = useState(null);

    const markInputInvalid = (errorsArr, err, inputName) => {
        errorsArr.push(err);
        dispatch({
            type: ACTIONS.SET_INVALID,
            payload: { name: inputName },
        });
    };

    const markInputValid = (inputName) => {
        if (!state[inputName].isValid) {
            dispatch({
                type: ACTIONS.SET_VALID,
                payload: { name: inputName },
            });
        }
    };

    const createErrors = (errorsArr) => {
        const validator = new DataValidator();
        const inputsNamesList = getInputsNames();
        inputsNamesList.forEach((inputName) => {
            const err = validator.checkDataErrors(inputName, state[inputName].value);
            return err ? markInputInvalid(errorsArr, err, inputName) : markInputValid(inputName);
        });
    };

    const findErrors = () => {
        const errorsArr = [];
        createErrors(errorsArr);
        const errorsObj = convertArrToObj(errorsArr);
        return errorsObj;
    };

    const handleSend = () => {
        setErrors({});
        sendMessage(state, dispatch, setInfo);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInfo(null);
        const errorsObj = findErrors();
        return isObjectEmpty(errorsObj) ? handleSend(errorsObj) : setErrors(errorsObj);
    };

    const renderFormFields = () =>
        fields.map((field) => (
            <FormField
                key={field.name}
                field={field}
                formState={state}
                errorsState={errors}
                dispatch={dispatch}
                styles={styles}
            />
        ));

    const renderSendInfo = () => (info ? <p>{info}</p> : null);

    return (
        <div style={styles.container}>
            <div style={styles.formWrapper}>
                <h1>contact form</h1>
                <form onSubmit={handleSubmit} noValidate>
                    {renderFormFields()}
                    <input type="submit" value="send" />
                </form>
                {renderSendInfo()}
            </div>
        </div>
    );
};

export default ContactForm;
