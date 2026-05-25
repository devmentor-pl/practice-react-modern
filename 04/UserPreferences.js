import PropTypes from 'prop-types';
import React from 'react';

function UserPreferences({roundTime, setRoundTime }) {

    const handleChange = (e) => {
        const minutes = Number(e.target.value);
        setRoundTime(minutes);
    }

    return (
        <>
            <h2>Możesz ustawić czas trwania rundy:</h2>
            <label htmlFor='roundTime'>
                Wprowadź czas rundy (w minutach)
                <input 
                    id='roundTime' 
                    type="number"  
                    value={roundTime} 
                    onChange={handleChange}
                />
            </label>
        </>
    );
}

UserPreferences.propTypes = {
    roundTime: PropTypes.number,
    setRoundTime: PropTypes.func,
}

export default UserPreferences;