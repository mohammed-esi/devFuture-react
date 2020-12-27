import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ServiceItem = ({service}) => {

  const {_id, title, text, skills} = service


  return (
    <div className="row" key={_id}>
      <div className="card">
        <div className="card-body">
          <div className="float-left">
            <div className="d-flex align-items-center">
              <h5><i className="fas fa-tv fa-2x" /></h5>
              <Link to={`/service/${_id}`} target="_blank"><h5 className="mx-4">{title}</h5></Link>
            </div>
            <div className="d-flex align-items-center py-3">
              <p>
                {text}
              </p>
            </div>
            <div className="d-flex">   
              <p className="text-center">
                {skills.map((skill, index) => (
                  <span className="badge badge-pill badge-green mx-1" key={index}>{skill}</span>
                ))}
              </p>
            </div>
          </div>
          <div className="float-right">
            <p className="text-muted">50 min ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired
}

export default ServiceItem
