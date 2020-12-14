import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import formatData from '../../utils/formatData'

const ProfileEducation = ({education}) => {

  const {school, degree, fieldofstudy, to, from, description} = education

  return (
    <Fragment>
        <h6 className="mt-3">
          {school.toUpperCase()}
        </h6>
        <span className="text-muted mb-3 italic">{formatData(from)} - {to ? formatData(to) : 'Now'}</span>
        <p><strong className="mr-2">Degree:</strong>{degree}</p>
        <p><strong className="mr-2">Field Of Study:</strong>{fieldofstudy}</p>
        <p><strong className="mr-2">Description:</strong>{description ? (<p className="text-muted">{description}</p>): (<p className="text-muted">No description added yet.</p>)}</p>
    </Fragment>
  )
}

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired
}

export default ProfileEducation
