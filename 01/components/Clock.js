import React from 'react';
import PropTypes from 'prop-types';

import ClockTime from './ClockTime';
import ClockDate from './ClockDate';

// eslint-disable-next-line arrow-body-style
const Clock = ({date}) => {
    return (
        <>
            <ClockTime date={date} />
            <ClockDate date={date} />
        </>
    );
};

Clock.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
};

export default Clock;
