import React from 'react'
import { Link } from 'react-router-dom'

const ServiceSearch = () => {
  return (
    <div className="row">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <div className="form-group my-3">
                <div className="d-flex">
                  <input className="form-control" type="text" id="search" placeholder="search ..." />
                  <i className="fas fa-search ml-3" />
                </div>
              </div>
            </div>
            <div className="col-md-4 offset-md-4 my-3">
              <div className="d-flex justify-content-end">
                <Link to="/create-service" className="btn btn-card btn-lg">
                  Create Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSearch
