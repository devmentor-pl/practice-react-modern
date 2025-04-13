import React from 'react';
import PropTypes from 'prop-types';

function ClockTime({ date }) {
    function getCorrectFormatNumber(number) {
        return number.toString().padStart(2, '0');
    }
    const hours = getCorrectFormatNumber(date.getHours());
    const minutes = getCorrectFormatNumber(date.getMinutes());
    const seconds = getCorrectFormatNumber(date.getSeconds());

    return (
        <section>
            {hours}:{minutes}:{seconds}
        </section>
    );
}

ClockTime.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
};

export default ClockTime;
