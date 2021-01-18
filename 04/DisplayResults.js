import React from 'react'
import PropTypes from 'prop-types';

const DisplayResults = (props) => {
    const { results } = props

    const Results = results.map(result => {
        return <li key={ result.id }>{ `Wyraz ${result.word} został napisany w 
                        ${ result.seconds } sekund` }</li>
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