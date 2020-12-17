import React, {Fragment, useContext, useState} from 'react'
import ServiceContext from '../../context/service/serviceContext'
import AlertContext from '../../context/alert/alertContext'
import Alert from '../layout/Alert'
import Loading from '../layout/Loading'

const ServiceForm = (props) => {
  const serviceContext = useContext(ServiceContext)
  const alertContext = useContext(AlertContext)

  const { createService } = serviceContext
  const { setAlert } = alertContext

  const [ displayLoading, setDispalyLoading ] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    skills: '',
    text: ''
  });

  const { title, skills, text } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (title === '' || skills === '' || text === '') {
      setAlert('Please enter all field', 'danger')
    } else {
      createService(formData)
      setDispalyLoading(!displayLoading)
      setTimeout(() => {
        setDispalyLoading(displayLoading)
        props.history.push('/services')
      }, 2000);
    }
  }




  return (
    <Fragment>
    {/* Form Create Profile */}
    <section id="form-create-service">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card my-6">
            <div className="card-body">
              <div className="my-2">
                <h1 className="text-center">Start Now &amp; Put Your Service</h1>
                <p className="mt-5">
                  Let's get some information to make your service.
                </p>
              </div>
              <Alert />
              <form onSubmit={onSubmit} className="px-4 pt-3">
                <div className="form-group">
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" type="text" placeholder="Title" name='title' value={title} onChange={onChange} />
                    <small className="form-text">Title your service</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="text">Description</label>
                    <input className="form-control" type="text" placeholder="Description" name='text' value={text} onChange={onChange} />
                    <small className="form-text">Could be your own or a description website</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <input className="form-control" type="text" placeholder="Skills" name='skills' value={skills} onChange={onChange} />
                    <small className="form-text">Please use comma separated values (eg.
                      HTML,CSS,JavaScript,PHP)</small>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    {displayLoading ? (
                      <button className="btn btn-card btn-lg px-5 mt-3 mb-4" disabled>
                        <Loading />
                      </button>
                    ) : (
                      <button className="btn btn-card btn-lg px-5 mt-3 mb-4" type='submit'>
                        <i className="fas fa-user mr-2" />Create Your Service
                      </button>
                    )}
                  </div>
                </div></form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default ServiceForm