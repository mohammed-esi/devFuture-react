import React, { useContext, useRef, useEffect } from 'react'
import ServiceContext from '../../context/service/serviceContext'
import { Link } from 'react-router-dom'

const ServiceSearch = () => {
  const serviceContext = useContext(ServiceContext)

  const { filtered, filterServices, clearFilter } = serviceContext

  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterServices(e.target.value);
    } else {
      clearFilter();
    }
  };


  return (
    <div className="row">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <div className="form-group my-3">
                <div className="d-flex">
                  <input className="form-control" type="text" ref={text} onChange={onChange} placeholder="search ..." />
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
