import React, { Fragment } from 'react'
import Loading from '../layout/Loading'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const DashboardSideBar = ({user, profile, loading, sidebar, onLogout, showSidebar}) => {
  return (
    <div className={sidebar ? 'sidenav visible' : 'sidenav'}>
      <button className='btn closebtn' onClick={showSidebar}>×</button>
      <div className='container'>
        <div className='d-flex flex-column pt-4 pb-5'>
          <div className='d-flex justify-content-center'>
            <img
              src={user && user.avatar}
              alt='smart'
              className='img-fluid rounded-circle'
            />
          </div>
          <div className='d-flex justify-content-center my-4'>
            {user && profile ? (
              <Link to={`/profile/${user._id}`}>
                <h5>{user.firstName[0].toUpperCase() + '. ' + user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}</h5>
              </Link>
            ) : (
              <Fragment>
                {user && (<h5>{user.firstName[0].toUpperCase() + '. ' + user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}</h5>)}
              </Fragment>
            )}
          </div>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center my-6">
              <Loading />
            </div>
          ) : (
            <div className='d-flex flex-column justify-content-start'>
              <h6 className='mt-4'>
                <Link to='/services'>
                  <i className='fas fa-clone mr-3' /> Services
                </Link>
              </h6>
              <h6 className='mt-4'>
                <Link to='/profiles'>
                  <i className='fas fa-code mr-3' /> Developers
                </Link>
              </h6>
              {profile ? (
                <Fragment>
                  <h6 className='mt-4'>
                    <Link to='/edit-profile'>
                      <i className='fas fa-user-circle mr-3' /> Edit Profile
                    </Link>
                  </h6>
                  <h6 className='mt-4'>
                    <Link to='/edit-education'>
                      <i className='fas fa-graduation-cap mr-3' /> Edit Education
                    </Link>
                  </h6>
                  <h6 className='mt-4'>
                    <Link to='/edit-experience'>
                      <i className='fab fa-black-tie mr-3' /> Edit Experience
                    </Link>
                  </h6>
                </Fragment>
              ) : (
                <Fragment>
                  <h6 className='mt-4'>
                    <Link to='/create-profile'>
                          <i className='fas fa-user-circle mr-3' /> Create Profile
                    </Link>
                  </h6>
                </Fragment>
              )}
              <hr className='mx-4 my-4' />
              <h6 className='mt-4'>
                <Link to='#' onClick={onLogout}>
                  <i className='fas fa-sign-out-alt mr-3' /> Logout
                </Link>
              </h6>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

DashboardSideBar.propTypes = {
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  sidebar: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
  showSidebar: PropTypes.func.isRequired
}

export default DashboardSideBar;
