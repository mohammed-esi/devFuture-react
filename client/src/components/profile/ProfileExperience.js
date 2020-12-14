import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import formatData from '../../utils/formatData'

const  ProfileExperience = ({experience}) => {

  const {title, company, location, description, to, from} = experience

  return (
    <Fragment>
      <div className="d-flex flex-column my-4">
        <h6 className="mt-3">
          {company.toUpperCase()}
        </h6>
        <span className="text-muted mb-3 italic">{formatData(from)} - {to ? (formatData(to)) : ('Now')}</span>
        <p><strong className="mr-2">Position:</strong>{title}</p>
        <p><strong className="mr-2">Location:</strong>{location}</p>
        <p><strong className="mr-2">Description:</strong></p>{description ? (<p className="text-muted">{description}</p>): (<p className="text-muted">No description added yet.</p>)}<p/>
      </div>
    </Fragment>
  )
}

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired
}


export default ProfileExperience
