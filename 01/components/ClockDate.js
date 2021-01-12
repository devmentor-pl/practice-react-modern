import React from 'react';
import propTypes from 'prop-types';

const ClockDate = props => {
    function getCorrectMonthFormat(monthNumber) {
        return (monthNumber + 1).toString().padStart(2, '0');
    }
    function getCorrectDayFormat(day) {
        return day.toString().padStart(2, '0');
    }

    const { date } = props;
    const year = date.getFullYear();
    const month = getCorrectMonthFormat(date.getMonth());
    const day = getCorrectDayFormat(date.getDate());

    return (
        <section>
            {year}:{month}:{day}
        </section>
    );
};

ClockDate.propTypes = {
    date: propTypes.instanceOf(Date).isRequired,
}

export default ClockDate;
