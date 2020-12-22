import React, {Fragment, useContext, useEffect, useState} from 'react'
import ServiceSearch from './ServiceSearch'
import Services from './Services'
import Pagination from './Pagination'
import ServiceContext from '../../context/service/serviceContext'

const ServicesPage = () => {
  const serviceContext = useContext(ServiceContext)
  const { getServices, services, loading, filtered } = serviceContext

  const [ currentPage, setCurrentPage ] = useState(1)
  const [ servicesPerPage ] = useState(4)

  useEffect(() => {
    getServices()
    // eslint-disable-next-line
  }, [])

  // Get current posts
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);
  const currentFilterred = filtered.slice(indexOfFirstService, indexOfLastService);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

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
            <div className="card my-5 card-of-page">
              <div className="card-header">
                <ServiceSearch />
              </div>
              <div className="card-body card-general">
              <Services services={currentServices} loading={loading} filtered={currentFilterred} />
              </div>
              <div className="card-footer">
                {!loading && services && (
                  <Pagination servicesPerPage={servicesPerPage} totalServices={services.length} paginate={paginate} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default ServicesPage
