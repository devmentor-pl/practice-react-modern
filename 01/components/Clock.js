import React from 'react'
import PropTypes from 'prop-types'

import ClockTime from './ClockTime'
import ClockDate from './ClockDate'

const Clock = props => {
   const [timeDate, dateDate] = props
   return (
      <>
         <ClockTime date={timeDate} />
         <ClockDate date={dateDate} />
      </>
   )
}

Clock.propTypes = {
   date: PropTypes.instanceOf(Date).isRequired,
}

export default Clock
