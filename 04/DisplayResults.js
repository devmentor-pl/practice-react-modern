import React from 'react'
import PropTypes from 'prop-types';

import {v4 as uuid} from 'uuid';

const DisplayResults = (props) => {
    const { results } = props

    const Results = results.map(result => {
        return <li key={ uuid() }>{ `Wyraz ${result.word} został napisany w 
                        ${result.seconds > 0 ? result.seconds : 1} sekund` }</li>
    })

    return (
        <section>
            <p>WYNIKI:</p>
            <ul>
                { Results }
            </ul>
        </section>
    )
}

DisplayResults.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
        word: PropTypes.string.isRequired,
        seconds: PropTypes.number.isRequired,
    })).isRequired,
}

export default DisplayResults