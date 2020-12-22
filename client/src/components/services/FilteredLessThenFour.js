import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ServiceItem from './ServiceItem'

export default function FilteredLessThenFour({filtered}) {
  return (
    <Fragment>
      {filtered.map((service) => (
        <ServiceItem service={service} />
      ))}
      <div className="d-flex justify-content-center align-items-center my-6">
        <h2 className="text-muted">
          Add more services
        </h2>
      </div>
    </Fragment>
  )
}

FilteredLessThenFour.propTypes = {
  filtered: PropTypes.array.isRequired
}