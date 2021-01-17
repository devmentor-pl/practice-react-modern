/* eslint react/prop-types: 0 */
import React from 'react';

const Input = props => {
    const { value, placeholder, type, id, name, dispatch } = props;

    return (
        <label htmlFor={id}>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={e => dispatch({ type: name, payload: e.target.value })}
                // czy jest metoda wyslania tych danych tylko przez podanie 'e.target'?
                // w sensie czy muszę uzyć payload zeby te dane wyslac?
                // jeśli nie uzywam payload to mi rzuca error o zmianie inputa kontrolowanego w niekontrolowany
            />
        </label>
    );
};

export default Input;
