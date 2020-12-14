import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({profile}) => {

  const { bio, skills, sociel: { youtube, facebook, twitter, instagram, linkedin }, worksites: { github }, website } = profile

  return (
    <Fragment>
      <div className="d-flex justify-content-start my-4">
        <h5>Description</h5>
      </div>
      {bio ? (
        <div className="d-flex align-items-start my-4">
          <p className="text-muted">
            {bio}
          </p>
        </div>
      ) : (
        <div className="d-flex align-items-center my-4">
          <p className="text-muted">
            No added description yet.
          </p>
        </div>
      )}
      <hr className="margin-per" />
      <div className="d-flex justify-content-start my-4">
        <h5>Skills</h5>
      </div>
      <div className="d-flex align-items-center my-4">
        <p>
          {skills.map((skill, index) => (
            <span className="badge badge-pill badge-green" key={index}>{skill}</span>
          ))}
        </p>
      </div>
      <hr className="margin-per" />
      <div className="d-flex justify-content-start my-4">
        <h5>Linked Accounts</h5>
      </div>
      <div className="d-flex flex-column my-4">
        {facebook === '' ? <p className='text-muted'><i className="fab fa-facebook mr-2 my-2" /> Facebook</p> : <p><a href={facebook}><i className="fab fa-facebook mr-2 my-2" /> Facebook</a></p> }
        {instagram === '' ? <p className='text-muted'><i className="fab fa-instagram mr-2 my-2" /> Instagram</p> : <p><a href={instagram}><i className="fab fa-instagram mr-2 my-2" /> Instagram</a></p> }
        {linkedin === '' ? <p className='text-muted'><i className="fab fa-linkedin mr-2 my-2" /> LinkedIn</p> : <p><a href={linkedin}><i className="fab fa-linkedin mr-2 my-2" /> LinkedIn</a></p> }
        {twitter === '' ? <p className='text-muted'><i className="fab fa-twitter mr-2 my-2" /> Twitter</p> : <p><a href={twitter}><i className="fab fa-twitter mr-2 my-2" /> Twitter</a></p> }
        {github === '' ? <p className='text-muted'><i className="fab fa-github mr-2 my-2" /> Github</p> : <p><a href={github}><i className="fab fa-github mr-2 my-2" /> Github</a></p> }
        {website === '' ? <p className='text-muted'><i className="fas fa-globe mr-2 my-2" /> Own Website</p> : <p><a href={website}><i className="fas fa-globe mr-2 my-2" /> Own Website</a></p> }
        {youtube === '' ? <p className='text-muted'><i className="fab fa-youtube mr-2 my-2" /> Youtube</p> : <p><a href={youtube}><i className="fab fa-youtube mr-2 my-2" /> Youtube</a></p> }
      </div>
    </Fragment>
  )
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileAbout
