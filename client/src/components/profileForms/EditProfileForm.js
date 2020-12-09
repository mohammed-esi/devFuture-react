import React, {Fragment, useContext, useState, useEffect} from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AlertContext from '../../context/alert/alertContext'
import Alert from '../layout/Alert'
import Loading from '../layout/Loading'

const ProfileForm = (props) => {
  const initialState = {
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  }
  
  const profileContext = useContext(ProfileContext);
  const { profile, loading, getCurrentProfile, createProfile } = profileContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [ formData, setFormData ]  = useState(initialState);

  const [ displaySocialInputs, toggelSocialInputs ] = useState(false);

  const [ displayLoading, setDispalyLoading ] = useState(false)

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.sociel) {
        if (key in profileData) profileData[key] = profile.sociel[key];
      }
      if (Array.isArray(profileData.skills)) {
        profileData.skills = profileData.skills.join(', ');
      }
      setFormData(profileData);
    }
    // eslint-disable-next-line
  }, [loading, getCurrentProfile, profile]);


  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onSubmit = e => {
    e.preventDefault();
    if (skills === '' || status === '') {
      setAlert('Please enter all fields required', 'danger')
    } else {
      createProfile(formData);
      setDispalyLoading(!displayLoading)
      setTimeout(() => {
        props.history.push('/dashboard')
      }, 3000);
    }
  }

  return (
    <Fragment>
    {/* Form Edit Profile */}
    <section id="form-profile">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card my-6">
            <div className="card-body">
              <div className="my-2 text-center">
                <h1>Edit Your Profile</h1>
                <p className="mt-5">
                  Let's get some information to make your profile stand out
                </p>
              </div>
              <Alert />
              <form className="px-4 pt-3" onSubmit={onSubmit}>
                {/* User Information */}
                <div className="form-group">
                  <select className="form-control" name="status" value={status} onChange={onChange}>
                    <option value={0}>* Select Professional Status</option>
                    <option value="Developer">Developer</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Manager">Manager</option>
                    <option value="Student or Learning">Student or Learning</option>
                    <option value="Instructor">Instructor or Teacher</option>
                    <option value="Intern">Intern</option>
                    <option value="Other">Other</option>
                  </select>
                  <small className="form-text">Give us an idea of where you are at in your career</small>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input className="form-control" type="text" placeholder="company" name="company" value={company} onChange={onChange} />
                  <small className="form-text">Could be your own company or one you work for</small>
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input className="form-control" type="text" placeholder="website" name="website" value={website} onChange={onChange} />
                  <small className="form-text">Could be your own or a company website</small>
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input className="form-control" type="text" placeholder="location" name="location" value={location} onChange={onChange} />
                  <small className="form-text">City &amp; state suggested (eg. Boston, MA)</small>
                </div>
                <div className="form-group">
                  <label htmlFor="skills">Skillss</label>
                  <input className="form-control" type="text" placeholder="*skills" name="skills" value={skills} onChange={onChange} />
                  <small className="form-text">Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP)</small>
                </div>
                <div className="form-group">
                  <label htmlFor="githubUsername">Github Username</label>
                  <input className="form-control" type="text" placeholder="Github Username" name="githubusername" value={githubusername} onChange={onChange} />
                  <small className="form-text">If you want your latest repos and a Github link, include
                    your username</small>
                </div>
                <div className="form-group">
                  <label htmlFor="bio">Your Bio</label>
                  <textarea className="form-control" placeholder="A short bio of yourself" name="bio" value={bio} onChange={onChange} />
                  <small className="form-text">Tell us a little about yourself</small>
                </div>
                <hr className="mx-4" />

                {/* Social Information */}
                <div className="d-flex justify-content-start align-items-center">
                  <button className="btn btn-card btn-sm mt-3 mb-2" type='button' onClick={() => toggelSocialInputs(!displaySocialInputs)}>
                    <i className="fas fa-arrow-down mr-2" />Add your social networking
                  </button>
                </div>
                <small className="form-text mb-3 mx-4">Optional</small>
                {displaySocialInputs && (
                  <Fragment>
                  <div className="form-group">
                    <label htmlFor="facebook" ><i className="fab fa-facebook mr-2" />Facebook</label>
                    <input className="form-control" type="text" placeholder="Facebook Url" name="facebook" value={facebook} onChange={onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="twitter" ><i className="fab fa-twitter mr-2" />Twitter</label>
                    <input className="form-control" type="text" placeholder="Twitter Url" name="twitter" value={twitter} onChange={onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="instagram" ><i className="fab fa-instagram mr-2" />Instagram</label>
                    <input className="form-control" type="text" placeholder="Instagram Url" name="instagram"  value={instagram} onChange={onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="linkedin"><i className="fab fa-linkedin mr-2" />LinkedIn</label>
                    <input className="form-control" type="text" placeholder="Linkedin Url"  name="linkedin"  value={linkedin} onChange={onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="youtube"><i className="fab fa-youtube mr-2" />Youtube</label>
                    <input className="form-control" type="text" placeholder="Youtube Url"  name="youtube" value={youtube} onChange={onChange} />
                  </div>
                  </Fragment>
                )}
                <div className="d-flex justify-content-center align-items-center">
                  {displayLoading ? (
                    <button className="btn btn-card btn-lg px-5 mt-3 mb-4" type='submit' disabled>
                      <Loading />
                     </button>
                    ) : (
                    <button className="btn btn-card btn-lg px-5 mt-3 mb-4" type='submit'>
                      <i className="fas fa-user mr-2" />Edit Your Profile
                    </button>
                    )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default ProfileForm
