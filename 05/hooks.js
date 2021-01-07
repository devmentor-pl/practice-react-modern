import { useState} from 'react';

export default function useAttributes(defVal = '') {
    const [value, setValue] = useState(defVal);
    return {
        value,
        onChange: e => setValue(e.target.value),
    }

}
