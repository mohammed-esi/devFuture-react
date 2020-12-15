import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfileItem = ({profile}) => {

  const { status, user: { _id, firstName, lastName, avatar } } = profile

  return (
    <Fragment>
      <div class="col-lg-4 px-4">
        <div className="card my-5">
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <img src={avatar} alt="smart" className="img-fluid rounded-circle" />
            </div>
            <div className="text-center my-4">
              <h5>{firstName.charAt(0).toUpperCase() + firstName.slice(1) + ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1)}</h5>
              <h6 className="text-muted">{status}</h6>
            </div>
            <div className="d-flex justify-content-center">
              <Link to={`/profile/${_id}`}>Read more <i className="fas fa-chevron-right ml-2" /></Link>
            </div>
          </div>
        </div>
     </div>
    </Fragment>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.array.isRequired
}

export default ProfileItem
