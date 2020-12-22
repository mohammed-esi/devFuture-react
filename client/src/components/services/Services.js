import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ServiceItem from './ServiceItem'
import ServicesLessThenFour from './ServicesLessThenFour'
import FilterredLessThenFour from './FilteredLessThenFour'
import Loading from '../layout/Loading'

const Services = ({ services, loading, filtered }) => {
  return (
    <Fragment>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center my-18">
          <h6 className="my-2">
            <Loading />
          </h6>
        </div>
      ) : (
        <Fragment>
          {services.length > 0 ? (
            <Fragment>
              {filtered.length > 0 ? (
                <Fragment>
                  {filtered.length < 4 ? (
                    <FilterredLessThenFour filtered={filtered} />
                  ) : (
                    filtered.map((service) => (
                      <ServiceItem key={service._id} service={service} />
                    ))
                  )}
                </Fragment>
              ) : (
                <Fragment>
                  {services.length < 4 ? (
                    <ServicesLessThenFour services={services} />
                  ) : (
                    services.map((service) => (
                      <ServiceItem key={service._id} service={service} />
                    ))
                  )}
                </Fragment>
              )}
            </Fragment>
          ) : (
            <div className="d-flex justify-content-center align-items-center my-18">
              <h2 className="my-2">
                No services exist.
              </h2>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

Services.propTypes = {
  services: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  filtered: PropTypes.array.isRequired
}

export default Services
