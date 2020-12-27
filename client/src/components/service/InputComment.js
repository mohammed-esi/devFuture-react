import React, { useContext, useState } from 'react'
import ServiceContext from '../../context/service/serviceContext'
import ProfileContext from '../../context/profile/profileContext'
import AuthContext from '../../context/auth/authContext'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const InputComment = ({ serviceId }) => {
  const serviceContext = useContext(ServiceContext)
  const profileContext = useContext(ProfileContext)
  const authContext = useContext(AuthContext)

  const { addComment } = serviceContext
  const { profile } = profileContext
  const { user } = authContext

  const [ text, setText ] = useState('')

  const onSumbit = (e) => {
    e.preventDefault()
    addComment(serviceId, {text})
    setText('')
  }

  return (
    <div className="row">
      <div className="col-sm-4">
        {profile === null ? (
          <div className="d-flex align-self-center">
            <p><img src={user.avatar} alt="person-one" className="mr-3" width={'80px'} height={'80px'} />{user.firstName[0].toUpperCase() + '.'} {user.lastName.length > 18 ? user.lastName.substring(0, 15) + '...' : user.lastName}</p>
          </div>
        ) : (
          <div className="d-flex align-self-center">
            <Link to={`/profile/${user._id}`}><img src={user.avatar} alt="person-one" className="mr-3" width={'80px'} height={'80px'} />{user.firstName[0].toUpperCase() + '.'} {user.lastName.length > 18 ? user.lastName.substring(0, 15) + '...' : user.lastName}</Link>
          </div>
        )}
      </div>
      <div className="col-sm-8">
        <form onSubmit={onSumbit}>
          <div className="form-group my-3">
            <textarea className="form-control" type="text" placeholder="Add Comment.." name='text' value={text} onChange={e => setText(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-card">Comment</button>
        </form>
      </div>
    </div>
  )
}

InputComment.propTypes = {
  serviceId: PropTypes.string.isRequired
}

export default InputComment;
