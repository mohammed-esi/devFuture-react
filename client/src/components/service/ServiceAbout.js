import React, { Fragment, useContext, useState, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import ServiceContext from '../../context/service/serviceContext'
import PropTypes from 'prop-types'
import formatData from '../../utils/formatData'

const ServiceAbout = ({ service, showComments }) => {
  const authContext = useContext(AuthContext)
  const serviceContext = useContext(ServiceContext)

  const { isAuthenticated, loading, user } = authContext;
  const { addLike, removeLike, error } = serviceContext;

  const { _id, title, text, skills, likes, comments, date } = service

  const [ activeButton, toggelActiveButton ] = useState(false)

  useEffect(() => {
    if (error.msg === 'Service aleardy liked') {
      removeLike(_id)
    }
    if (user && likes.some((like) => like.user.toString() === user._id.toString())) {
      if (error.msg === 'Service aleardy liked') {
        toggelActiveButton(false)
      } else {
        toggelActiveButton(true)
      }
    }
  }, [error])

  const onClick = (e) => {
    e.preventDefault()
    toggelActiveButton(!activeButton)
    if (e.type = 'click') {
      addLike(_id)
    }
  }

  return (
    <div className="card py-4 pr-2">
      <div className="card-body">
        <div className="d-flex">
          <div className="d-flex align-items-center"><h1><i className="fas fa-tv" /></h1></div>
          <div className="d-flex flex-column">
            <h1 className="mx-4 align-items-star">{title}</h1>
            <p className="mx-4 text-muted align-items-end"> {formatData(date)} </p>
          </div>
        </div>
        <div className="d-flex align-items-center py-5">
          <p>
            {text}
          </p>
        </div>
        <div className="d-flex">
          <p className="text-center">
            {skills.map((skill, index) => (
              <span className="badge badge-pill badge-green mx-2" key={index}>{skill}</span>
            ))}
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-around mt-5">
          {isAuthenticated && !loading ? (
            <Fragment>
              <div>
                <button type='button' onClick={onClick} className={activeButton ? 'btn btn-card btn-lg active' : 'btn btn-card btn-lg'}>
                  <i className="fas fa-heart mx-2" /> {likes.length}
                </button>
              </div>
              <div>
                <button type='button' onClick={showComments} className="btn btn-card btn-lg">
                  <i className="far fa-comment mx-2" /> {comments.length}
                </button>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div>
                <button className="btn btn-card btn-lg" data-toggle="tooltip" data-placement="right" title="Go to login or Sign up" disabled>
                  <i className="fas fa-heart mx-2" /> {likes.length}
                </button>
              </div>
              <div>
                <button className="btn btn-card btn-lg" data-toggle="tooltip" data-placement="right" title="Go to login or Sign up" disabled>
                  <i className="far fa-comment mx-2" /> {comments.length}
                </button>
              </div>
            </Fragment>
          )}
          <div>
            <button className="btn btn-card btn-lg" data-toggle="tooltip" data-placement="right" title="This is gonna done in the next version of this site." disabled>
              <i className="far fa-star mx-2" />2
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

ServiceAbout.propTypes = {
  service: PropTypes.object.isRequired,
  showComments: PropTypes.func.isRequired
}

export default ServiceAbout
