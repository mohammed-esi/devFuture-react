import React, { Fragment, useContext, useEffect } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import PropTypes from 'prop-types'

const ProfileGithub = ({username}) => {
  const profileContext = useContext(ProfileContext)
  const {getGithubRepos, repos} = profileContext

  useEffect(() => {
    getGithubRepos(username)
    // eslint-disable-next-line
  }, [username])


  return (
    <Fragment>
      {repos && (repos.map((repo) => (
        <div className='col-sm-12'>
          <div className="card py-2 my-2" key={repo.id}>
            <div className="card-body">
              <a href={repo.html_url} target='_blank'><h5 className="mb-3">{repo.name}</h5></a>
              <p className="lead">{repo.description}</p>
              <div className="d-flex justify-content-center media-badge">
                <span className="badge badge-pill badge-card mx-2"><strong className="mr-2">Starts:</strong>{repo.stargazers_count}</span>
                <span className="badge badge-pill badge-card mx-2"><strong className="mr-2">Watches</strong>{repo.watchers_count}</span>
                <span className="badge badge-pill badge-card mx-2"><strong className="mr-2">Forks:</strong>{repo.forks_count}</span>
              </div>
            </div>
          </div>
        </div>
      )))}
    </Fragment>
  )
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
}

export default ProfileGithub
