import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const  ProfileHeader = ({ profile : { status, user: { firstName, lastName, avatar } } }) => {

  return (
    <Fragment>
      {/* Picturea and Info User */}
      <section id="user-profile" className="py-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-center">
                  <img src={avatar} alt="person" className="img-fluid" />
                </div>
                <div className="d-flex justify-content-center my-3">
                  <h1>{firstName + ' ' + lastName}</h1>
                </div>
                <div className="d-flex justify-content-center my-3">
                  <h4>{status}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileHeader
