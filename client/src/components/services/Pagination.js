import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ servicesPerPage, totalServices, paginate }) => {
  const pageNumber = []


  for (let i = 1; i <= Math.ceil(totalServices / servicesPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <div className="row">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-center mt-4">
          <nav aria-label="Page navigation example" className="navbar-pagination">
            <ul className="pagination">
              {pageNumber.map(number => (
                <li className="page-item" key={number}><a className="page-link btn-card" href="#!" onClick={() => paginate(number)}>{number}</a></li>
              ))}
              {/* <li className="page-item"><a className="page-link btn-card" href="#!">Previous</a></li>
              <li className="page-item"><a className="page-link btn-card" href="#!">1</a></li>
              <li className="page-item"><a className="page-link btn-card" href="#!">2</a></li>
              <li className="page-item"><a className="page-link btn-card" href="#!">3</a></li>
              <li className="page-item"><a className="page-link btn-card" href="#!">Next</a></li> */}
            </ul>
          </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  servicesPerPage: PropTypes.number.isRequired,
  totalServices: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired
}

export default Pagination
