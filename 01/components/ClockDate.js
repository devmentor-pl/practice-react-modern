import React from 'react';
import PropTypes from 'prop-types';

const ClockDate = props => {
    function getCorrectMonthFormat(monthNumber) {
        return (monthNumber + 1).toString().padStart(2, '0');
    }
    function getCorrectDayFormat(day) {
        return day.toString().padStart(2, '0');
    }

    const {
        date: { getDate, getFullYear, getMonth },
    } = props;
    const year = getFullYear();
    const month = getCorrectMonthFormat(getMonth());
    const day = getCorrectDayFormat(getDate());

    return (
        <section>
            {year}:{month}:{day}
        </section>
    );
};

ClockDate.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
};

export default ClockDate;
