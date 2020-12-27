import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const ServiceInformationUser = ({service}) => {

  const { name, avatar, email, user, profile } = service;

  return (
    <div className="card card-user">
      <div className="card-body">
        {profile === null ? (
          <div className="d-flex align-items-center">
            <h6><img src={avatar} alt="person-one" className="mr-3" width={'60px'} height={'60px'} />{name.length > 18 ? name.substring(0, 15) + '...' : name}</h6>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <Link to={`/profile/${user}`}><h6><img src={avatar} alt="person-one" className="mr-3" width={'60px'} height={'60px'} />{name.length > 18 ? name.substring(0, 15) + '...' : name}</h6></Link>
          </div>
        )}
        <hr />
        {profile === null ? (
          <div className="d-flex flex-column mt-4 mb-2">
            {/* <p>
              <strong>Services</strong> : 12
            </p> */}
            <p>
              <strong>Email</strong> : {email}
            </p>
        </div>
        ) : (
          <div className="d-flex flex-column mt-4 mb-2">
            {/* <p>
              <strong>Services</strong> : 12
            </p> */}
            <p>
              <strong>Field</strong> : {profile.status}
            </p>
            <p>
              <strong>Email</strong> : {email}
            </p>
        </div>
        )}
      </div>
    </div>
  )
}

ServiceInformationUser.propTypes = {
  service: PropTypes.object.isRequired
}

export default ServiceInformationUser
