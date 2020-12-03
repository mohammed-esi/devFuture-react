import React, {Fragment} from 'react'

const ProfileForm = () => {
  return (
    <Fragment>
    {/* Form Create Profile */}
    <section id="form-profile">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card my-6">
            <div className="card-body">
              <div className="my-2">
                <h1 className="text-center">Create Your Profile</h1>
                <p className="mt-5">
                  Let's get some information to make your profile stand out
                </p>
              </div>
              <div className="alert alert-danger alert-dismissible mt-4">
                <button className="close" type="button" data-dismiss="alert">
                  <span>×</span>
                </button>
                <strong><i className="fas fa-exclamation-circle mr-2" /></strong>
                Please check the log files
              </div>
              <form className="px-4 pt-3">
                <div className="form-group">
                  <select className="form-control" name="status">
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
                  <input className="form-control" type="text" id="company" placeholder="company" />
                  <small className="form-text">Could be your own company or one you work for</small>
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input className="form-control" type="text" id="website" placeholder="website" />
                  <small className="form-text">Could be your own or a company website</small>
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input className="form-control" type="text" id="location" placeholder="location" />
                  <small className="form-text">City &amp; state suggested (eg. Boston, MA)</small>
                </div>
                <div className="form-group">
                  <label htmlFor="skills">Skillss</label>
                  <input className="form-control" type="text" id="skills" placeholder="*skills" />
                  <small className="form-text">Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP)</small>
                </div>
                <div className="form-group">
                  <label htmlFor="githubUsername">Github Username</label>
                  <input className="form-control" type="text" id="githubUsername" placeholder="Github Username" />
                  <small className="form-text">If you want your latest repos and a Github link, include
                    your username</small>
                </div>
                <div className="form-group">
                  <label htmlFor="bio">Your Bio</label>
                  <textarea className="form-control" placeholder="A short bio of yourself" name="bio" defaultValue={""} />
                  <small className="form-text">Tell us a little about yourself</small>
                </div>
                <hr className="mx-4" />
                <div className="form-group">
                  <label htmlFor="facebook"><i className="fab fa-facebook mr-2" />Facebook</label>
                  <input className="form-control" type="text" id="facebook" placeholder="Facebook Url" />
                </div>
                <div className="form-group">
                  <label htmlFor="twitter"><i className="fab fa-twitter mr-2" />Twitter</label>
                  <input className="form-control" type="text" id="twitter" placeholder="Twitter Url" />
                </div>
                <div className="form-group">
                  <label htmlFor="instagram"><i className="fab fa-instagram mr-2" />Instagram</label>
                  <input className="form-control" type="text" id="instagram" placeholder="Instagram Url" />
                </div>
                <div className="form-group">
                  <label htmlFor="linkedin"><i className="fab fa-linkedin mr-2" />LinkedIn</label>
                  <input className="form-control" type="text" id="linkedin" placeholder="Linkedin Url" />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-card btn-lg px-5 mt-3 mb-4">
                    <i className="fas fa-user mr-2" />Create Your Profile
                  </button>
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
