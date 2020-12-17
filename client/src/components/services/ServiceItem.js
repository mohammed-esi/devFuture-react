import React from 'react'
import PropTypes from 'prop-types'

const ServiceItem = ({service}) => {

  const {_id, title, text, skills} = service


  return (
    <div className="row" key={_id}>
      <div className="card">
        <div className="card-body">
          <div className="float-left">
            <div className="d-flex align-items-center">
              <h5><i className="fas fa-tv fa-2x" /></h5>
              <a href="./service.html" target="_blank"><h5 className="mx-4">{title}</h5></a>
            </div>
            <div className="d-flex align-items-center py-3">
              <p>
                {text}
              </p>
            </div>
            <div className="d-flex">   
              <p className="text-center">
                {skills.map((skill, index) => (
                  <span className="badge badge-pill badge-green" key={index}>{skill}</span>
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
