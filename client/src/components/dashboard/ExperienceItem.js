import React, { useContext } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import PropTypes from 'prop-types'
import formatDate from '../../utils/formatData'

const ExperienceItem = ({experience}) => {
  const profileContext = useContext(ProfileContext)
  const { deleteExperience } = profileContext

  const {
    _id,
    company,
    title,
    location,
    from,
    to,
    current,
    description
  } = experience

  const onDelete = () => {
    deleteExperience(_id);
  }



  return (
    <tr key={_id}>
      <td> {company} </td>
      <td> {title} </td>
      <td> {formatDate(from)} - {to ? formatDate(to) : 'Now'} </td>
      <td>
        <button className='btn btn-card btn-lg' onClick={onDelete}>
          <i className='fas fa-trash mr-2' />
          Delete
        </button>
      </td>
    </tr>
  )
}

ExperienceItem.propTypes = {
  experience: PropTypes.object.isRequired
}

export default ExperienceItem
