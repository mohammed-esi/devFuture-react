import React from 'react'
import CommentItem from './CommentItem'
import PropTypes from 'prop-types'


const Comments = ({comments}) => {
  return (
    <div className="row py-5">
      {comments.length > 0 ? (
        comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} />
        ))
      ) : (
        <div className='col'>
          <div className="d-flex justify-content-center align-items-center my-6">
            <h6 className="my-2">
              No Comment Added
            </h6>
          </div>
        </div>
      )}
    </div>
  )
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
}

export default Comments;
