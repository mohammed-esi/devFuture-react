import React, { useContext, useState } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import PropTypes from 'prop-types'
import formatDate from '../../utils/formatData'
import Loading from '../layout/Loading'

const ExperienceItem = ({experience}) => {
  const profileContext = useContext(ProfileContext)
  const { deleteExperience } = profileContext

  const [ displayLoading, setDispalyLoading ] = useState(false)

  const {
    _id,
    company,
    title,
    from,
    to,
  } = experience

  const onDelete = () => {
    setDispalyLoading(!displayLoading)
    setTimeout(() => {
      deleteExperience(_id);
      setDispalyLoading(displayLoading)
    }, 2000)
  }



  return (
    <tr key={_id}>
      <td> {company} </td>
      <td> {title} </td>
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

ExperienceItem.propTypes = {
  experience: PropTypes.object.isRequired
}

export default ExperienceItem
