import React, { useContext } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import PropTypes from 'prop-types'
import formatDate from '../../utils/formatData'


const  EducatioinItem = ({education}) => {
  const profileContext = useContext(ProfileContext)
  const { deleteEducation } = profileContext

  const {
    _id,
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = education;

  const onDelete = () => {
    deleteEducation(_id);
  }

  return (
    <tr key={_id}>
      <td> {school} </td>
      <td> {degree} </td>
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

EducatioinItem.propTypes = {
  education: PropTypes.object.isRequired
}

export default EducatioinItem
