import React, {Fragment, useContext, useEffect} from 'react'
import ProfileContext from '../../context/profile/profileContext'
import ProfileHeader from './ProfileHeader'
import ProfileAbout from './ProfileAbout'
import ProfileEducation from './ProfileEducation'
import ProfileExperience from './ProfileExperience'
import ProfileGithub from './ProfileGithub'
import LoadingPage from '../layout/LoadingPage'



const Profile = (props) => {
  const profileContext = useContext(ProfileContext)
  const { profile, getProfileById, loading } = profileContext

  useEffect(() => {
    getProfileById(props.match.params.id)
    // eslint-disable-next-line
  }, [props.match.params.id])

  if (loading) {
    return <LoadingPage />
  }



  return (
    <Fragment>
      {profile && (
        <Fragment>
        {/* Background Profile */}
        <section id="bg-profile"></section>
  
        {/* Picturea and Info User */}
        <ProfileHeader profile={profile} />
  
        {/* Services and Informations */}
        <section id="about-user" className="py-5">
        <div className="row">
          <div className="col-md-4 py-4">
            <div className="card">
              <div className="card-body">
                <ProfileAbout profile={profile} />
                <hr className="margin-per" />
                <div className="d-flex justify-content-start my-2">
                  <h5>Education</h5>
                </div>
                {profile.education.length > 0 ? (
                  <Fragment>
                    {profile.education.map((education) => (
                      <div className="d-flex flex-column my-2">
                        <ProfileEducation key={education._id} education={education} />
                      </div>
                    ))}
                  </Fragment>
                ) : (
                  <div className="d-flex justify-content-center align-items-center my-6">
                    <h6 className="my-2">
                      No education added
                    </h6>
                  </div>
                )}
                <hr className="margin-per" />
                <div className="d-flex justify-content-start my-2">
                  <h5>Experience</h5>
                </div>
                {profile.experience.length > 0 ? (
                  <Fragment>
                    {profile.experience.map((experience) => (
                      <div className="d-flex flex-column my-2">
                        <ProfileExperience key={experience._id} experience={experience} />
                      </div>
                    ))}
                  </Fragment>
                ) : (
                  <div className="d-flex justify-content-center align-items-center my-6">
                  <h6 className="my-2">
                    No experience added
                  </h6>
                </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-8 py-5">
            <div className="row my-3">
              <div className="d-flex justify-content-start">
                <h1><i className="fab fa-github mr-2" />Github  Repositories</h1>
              </div>
            </div>
            <div className="row">
              {profile.githubusername ? (
              <ProfileGithub username={profile.githubusername} />
              ) : (
                <div className="col-sm-12">
                  <div className="d-flex justify-content-center align-items-center my-6">
                    <h6 className="my-2">
                      No repos added
                    </h6>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      </Fragment>
      )}
    </Fragment>
  )
}

export default Profile
