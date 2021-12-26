import React from 'react';
import { isObjectEmpty, setInputBorder } from '../helpers/helpersFunctions';
import ACTIONS from '../helpers/actions';

const FormField = (props) => {
    const handleChange = (e) => {
        const { dispatch } = props;
        const { name, value } = e.target;
        dispatch({
            type: ACTIONS.CHANGE_VALUE,
            payload: { name, value },
        });
    };

    const showErrMsg = (errMsg) => {
        const { styles } = props;
        return <p style={styles.errMsg}>{errMsg}</p>;
    };

    const renderErrorMsg = () => {
        const {
            field: { name: inputName },
            errorsState,
        } = props;
        return !isObjectEmpty(errorsState) && errorsState[inputName]
            ? showErrMsg(errorsState[inputName])
            : null;
    };

    const renderField = () => {
        const {
            field: { name, label, type = null, fieldName = 'input' },
            formState,
            styles,
        } = props;
        const FieldName = fieldName;
        return (
            <>
                <label htmlFor={name}>
                    {label}
                    <FieldName
                        id={name}
                        name={name}
                        type={type}
                        value={formState[name].value}
                        onChange={handleChange}
                        autoComplete="off"
                        style={{
                            ...styles.field,
                            ...setInputBorder(name, formState),
                        }}
                    />
                </label>
                <div style={styles.fieldPlaceholder}>{renderErrorMsg()}</div>
            </>
        );
    };

    return <div>{renderField()}</div>;
};

export default FormField;
