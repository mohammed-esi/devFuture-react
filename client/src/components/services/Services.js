import React, {Fragment, useContext, useEffect} from 'react'
import ServiceSearch from './ServiceSearch'
import ServiceItem from './ServiceItem'
import ServiceContext from '../../context/service/serviceContext'

const Services = () => {
  const serviceContext = useContext(ServiceContext)
  const { getServices, services } = serviceContext

  useEffect(() => {
    getServices()
    // eslint-disable-next-line
  }, [])
  return (
    <Fragment>
      {/* Section for Services */}
      <section id="services">
        <div className="row">
          <div className="col-12 text-center mt-6">
            <div className="d-flex flex-column">
              <h1><i className="fas fa-tv" /></h1>
              <h1>Services</h1>
            </div>
          </div>
          <div className="col-md-8 offset-md-2">
            <div className="card my-5">
              <div className="card-header">
                <ServiceSearch />
              </div>
              <div className="card-body card-general">
                {services.length > 0 ? (
                  services.map((service) => (
                    <ServiceItem service={service} />
                  ))
                ) : (
                  <div className="row">
                    <div className="d-flex justify-content-center align-items-center my-6">
                      <h6 className="my-2">
                        No services exist.
                      </h6>
                  </div>
                  </div>
                )}
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-center mt-4">
                        <div className="btn-toolbar">
                          <div className="btn-group">
                            <button className="btn btn-card mr-4">
                              <i className="fas fa-backward" />
                            </button>
                            <button className="btn btn-card">1</button>
                            <button className="btn btn-card">2</button>
                            <button className="btn btn-card">3</button>
                            <button className="btn btn-card">4</button>
                            <button className="btn btn-card ml-4">
                              <i className="fas fa-forward" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Services
