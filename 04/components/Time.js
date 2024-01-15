import React from 'react';
import PropTypes from 'prop-types';

function Time(props) {
    const { time } = props;
    return <p>Czas: {time}s</p>;
}

Time.propTypes = {
    time: PropTypes.number.isRequired,
};

export default Time;

