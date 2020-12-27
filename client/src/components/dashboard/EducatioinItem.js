import React, { useContext, useState } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import PropTypes from 'prop-types'
import formatDate from '../../utils/formatData'
import Loading from '../layout/Loading'


const  EducatioinItem = ({education}) => {
  const profileContext = useContext(ProfileContext)
  const { deleteEducation } = profileContext

  const [ displayLoading, setDispalyLoading ] = useState(false)

  const {
    _id,
    school,
    degree,
    from,
    to,
  } = education;

  const onDelete = () => {
    setDispalyLoading(!displayLoading);
    setTimeout(() => {
      deleteEducation(_id)
      setDispalyLoading(displayLoading)
    }, 2000)
  }

  return (
    <tr key={_id}>
      <td> {school} </td>
      <td> {degree} </td>
      <td> {formatDate(from)} - {to ? formatDate(to) : 'Now'} </td>
        <td>
        {displayLoading ? (
          <button className='btn btn-card btn-lg' disabled>
            <Loading />
          </button>
        ) : (
          <button className='btn btn-card btn-lg' onClick={onDelete}>
            <i className='fas fa-trash mr-2' />
            Delete
          </button>
        )}
        </td>
    </tr>
  )
}

EducatioinItem.propTypes = {
  education: PropTypes.object.isRequired
}

export default EducatioinItem
