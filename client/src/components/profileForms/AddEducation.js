import React, { Fragment, useContext, useState } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AlertContext from '../../context/alert/alertContext'
import Loading from '../layout/Loading'
import Alert from '../layout/Alert'

const AddEducation = (props) => {
  const profileContext = useContext(ProfileContext)
  const alertContext = useContext(AlertContext)

  const { addEducation } = profileContext
  const { setAlert } = alertContext

  const [ displayLoading, setDispalyLoading ] = useState(false)

  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { school, degree, fieldofstudy, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (school === '' || degree === '' || fieldofstudy === '') {
      setAlert('School, degree and study required!', 'danger')
    } else {
      if (to <= from && to || from === '') {
        setAlert('From date is required and needs to be from to the past', 'danger')
      } else {
        addEducation(formData)
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
      {/* Add Education in Profile */}
      <section id="form-education">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card my-8">
              <div className="card-body">
                <div className="my-2">
                  <h1 className="text-center">Edit Your Education</h1>
                  <p className="mt-5">
                    Add any school, bootcamp, etc that you have attended
                  </p>
                </div>
                <Alert />
                <form onSubmit={onSubmit} className="px-4 pt-3">
                  <div className="form-group">
                    <label htmlFor="school">School</label>
                    <input className="form-control" type="text" id="school" placeholder="School" name='school' value={school} onChange={onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="degree">Degree</label>
                    <input className="form-control" type="text" id="degree" placeholder="Degree" name='degree' value={degree} onChange={onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="field">Filed Of Study</label>
                    <input className="form-control" type="text" id="field" placeholder="Filed of study" name='fieldofstudy' value={fieldofstudy} onChange={onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="from">From Date</label>
                    <input className="form-control" type="date" id="from" placeholder="From" name='from' value={from} onChange={onChange} />
                    {/* <div className="invalid-feedback">
                      Please provide a valid date.
                    </div> */}
                    <div className="form-group">
                      <label htmlFor="toDate">To Date</label>
                      <input className="form-control" type="date" id="toDate" placeholder="To date" name='to' value={to} onChange={onChange} />
                      {/* <div className="valid-feedback">
                        Looks good!
                      </div> */}
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" name='current' value={current} onChange={() => { setFormData({ ...formData, current: !current }) }} />
                        <label className="form-check-label"  htmlFor="disabledFieldsetCheck">
                          Current School
                        </label>
                        {/* <small className="invalid-feedback">You must agree before submitting.</small> */}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="discEducation">Description</label>
                      <textarea className="form-control" placeholder="Description for your education" name='description' value={description} onChange={onChange} />
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                    {displayLoading ? (
                      <button className="btn btn-card btn-lg px-5 mt-3 mb-4" type='submit' disabled>
                        <Loading />
                      </button>
                      ) : (
                      <button className="btn btn-card btn-lg px-5 mt-3 mb-4">
                        <i className="fas fa-graduation-cap mr-2" />Edit Your
                        Education
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

export default AddEducation