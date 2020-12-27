import React from 'react'
import PropTypes from 'prop-types'


const CommentItem = ({comment}) => {
  
  const { text, avatar, name } = comment;

  return (
    <div className="col-sm-12 card-comment my-3">
      <div className="d-flex align-items-center comment">
        <p><img src={avatar} alt="person-one" className="img-fluid mr-3" />{name.length > 18 ? name.substring(0, 15) + '...' : name}</p>
      </div>
      <div className="d-flex align-items-center justify-content-around">
        <p className="text-muted">{text}</p>
      </div>
    </div>
  )
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired
}

export default CommentItem
