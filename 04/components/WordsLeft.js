import React from 'react';
import PropTypes from 'prop-types';

function WordsLeft(props) {
    const { data } = props;
    return <p>Pozostały: {data} słowa</p>;
}

WordsLeft.propTypes = {
    data: PropTypes.number.isRequired,
};

export default WordsLeft;
