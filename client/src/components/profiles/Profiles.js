import React, { Fragment, useContext, useEffect } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import ProfileCorousel from './ProfileCorousel'
import ProfilesSerach from './ProfilesSerach'
import ProfileItem from './ProfileItem'
import Loading from '../layout/Loading'

const  Profiles = () => {
  const profileContext = useContext(ProfileContext)

  const { loading, profiles, getProfiles, filtered } = profileContext

  useEffect(() => {
    getProfiles();
    // eslint-disable-next-line
  }, [])



  return (
    <Fragment>
      <ProfileCorousel />
      {/* Section Users */}
      <section id="users_developer" className="py-5">
        <div className="container">
          <ProfilesSerach />
          <hr className="mt-4" />
          {!loading  ? (
            <Fragment>
              <div id="field-users" className="row py-6">
                {profiles.length > 0 ? 
                (
                  <Fragment>
                    {filtered !== null ? (
                      <Fragment>
                        {filtered.length > 0 ? (
                          filtered.map(profile => (<ProfileItem key={profile._id} profile={profile} />))
                        ) : (
                          <div className="col-sm-12 mx-4 my-4">
                            <div className="d-flex justify-content-center align-items-center my-6">
                              <h2 className="my-2 text-muted">
                                No profile found <i className="fab fa-searchengin"></i>
                              </h2>
                            </div>  
                          </div>
                        )}
                      </Fragment>
                    ) : (
                      profiles.map(profile => (<ProfileItem key={profile._id} profile={profile} />))
                    )}
                  </Fragment>
                ) : (
                  <div className="col-sm-12 mx-4 my-4">
                    <div className="d-flex justify-content-center align-items-center my-6">
                      <h2 className="my-2 text-muted">
                        No profiles exists
                      </h2>
                    </div>  
                  </div>
                )}
              </div>
            </Fragment>
          ) : (
            <div id="field-users" className="row py-6">
              <div className="col-sm-12 mx-4 my-4">
                <div className="d-flex justify-content-center align-items-center my-6">
                  <h2 className="my-2 text-muted">
                    <Loading />
                  </h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Fragment>
  )
}

export default Profiles
