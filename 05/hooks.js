import { useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useChangeHandler = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    return {
        value,
        onChange: e => setValue(e.target.value),
    }
}