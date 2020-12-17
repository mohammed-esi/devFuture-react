import React, {Fragment, useContext, useState} from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AlertContext from '../../context/alert/alertContext'
import Loading from '../layout/Loading'
import Alert from '../layout/Alert'

const AddExperience = (props) => {
  const profileContext = useContext(ProfileContext);
  const alertContext = useContext(AlertContext)
  
  const { addExperience } = profileContext;
  const { setAlert } = alertContext;

  const [ displayLoading, setDispalyLoading ] = useState(false)

  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  
  const onSubmit = e => {
    e.preventDefault();
    if (title === '' || company === '') {
      setAlert('Title and company required!', 'danger')
    } else {
      if (to <= from && to || from === '') {
        setAlert('From date is required and needs to be from to the past', 'danger')
      } else {
        addExperience(formData)
        setDispalyLoading(!displayLoading)
        setTimeout(() => {
          setDispalyLoading(displayLoading)
          props.history.push('/dashboard')
        }, 2000);
        }
    }
  }
  


  return (
    <Fragment>
      {/* Add Experience in Profile */}
      <section id="form-experience">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card my-8">
              <div className="card-body">
                <div className="my-2">
                  <h1 className="text-center">Edit Your Experience</h1>
                  <p className="mt-5">
                    Add any developer/programming positions that you have had in
                    the past
                  </p>
                </div>
                <Alert />
                <form className="px-4 pt-3" onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Job Title</label>
                    <input className="form-control" type="text" placeholder="Job Title" name='title' value={title} onChange={onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="companyJob">Company</label>
                    <input className="form-control" type="text" placeholder="Company Job" name='company' value={company} onChange={onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="locationJob">Location</label>
                    <input className="form-control" type="text" placeholder="Location Job" name='location' value={location} onChange={onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="from">From Date</label>
                    <input className="form-control" type="date" id="from" placeholder="From ..." name='from' value={from} onChange={onChange} />
                    {/* <div className="invalid-feedback">
                      Please provide a valid date.
                    </div> */}
                    <div className="form-group">
                      <label htmlFor="toDate">To Date</label>
                      <input className="form-control" type="date" id="toDate" placeholder="To Date" name='to' value={to} onChange={onChange} />
                      {/* <div className="valid-feedback">
                        Looks good!
                      </div> */}
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" name='current' value={current} onChange={() => { setFormData({ ...formData, current: !current }) }} />
                        <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                          Current Job
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="discEducation">Description</label>
                      <textarea className="form-control" placeholder="Description for you experience" name="Disc of Education" name='description' value={description} onChange={onChange} />
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      {displayLoading ? (
                      <button className="btn btn-card btn-lg px-5 mt-3 mb-4" disabled>
                        <Loading />
                      </button>
                      ) : (
                        <button className="btn btn-card btn-lg px-5 mt-3 mb-4" type='submit'>
                        <i className="fab fa-black-tie mr-2" />Edit Your Experience
                      </button>
                      )}
                    </div>
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

export default AddExperience
