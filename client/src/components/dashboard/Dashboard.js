import React, {Fragment, useContext, useState} from 'react';
import AuthContext from '../../context/auth/authContext';
import { Redirect } from 'react-router-dom'
import persontwo from '../../img/person-two.png';
// import DashboardSideNav from './DashboardSideNav'
import Education from './Education'
import Experience from './Experience'

const Dashboard = () => {
  const authcontext = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const {logout} = authcontext;

  const onLgout = () => {
    logout();
    return <Redirect to='/login' />
  }

  return (
    <Fragment>
      {/* <DashboardSideNav /> */}
      <div className={sidebar ? 'sidenav visible' : 'sidenav'}>
        <button className='btn closebtn' onClick={showSidebar}>×</button>
        <div className='container'>
          <div className='d-flex flex-column pt-4 pb-5'>
            <div className='d-flex justify-content-center'>
              <img
                src={persontwo}
                alt='smart'
                className='img-fluid rounded-circle'
              />
            </div>
            <div className='d-flex justify-content-center my-4'>
              <a href='./profile.html'>
                <h5>Z. Mohammed Elamine</h5>
              </a>
            </div>
            <div className='d-flex flex-column justify-content-start'>
              <h6 className='mt-4'>
                <a href='./services.html'>
                  <i className='fas fa-clone mr-3' /> Services
                </a>
              </h6>
              <h6 className='mt-4'>
                <a href='./developers.html'>
                  <i className='fas fa-code mr-3' /> Developers
                </a>
              </h6>
              <h6 className='mt-4'>
                <a href='./create-profile.html'>
                  <i className='fas fa-user-circle mr-3' /> Add Profile
                </a>
              </h6>
              <h6 className='mt-4'>
                <a href='./add-educaction.html'>
                  <i className='fas fa-graduation-cap mr-3' /> Edit Education
                </a>
              </h6>
              <h6 className='mt-4'>
                <a href='./add-experience.html'>
                  <i className='fab fa-black-tie mr-3' /> Edit Experience
                </a>
              </h6>
              <hr className='mx-4 my-4' />
              <h6 className='mt-4'>
                <a href='#' onClick={onLgout}>
                  <i className='fas fa-sign-out-alt mr-3' /> Logout
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* Dashboard */}
      <section id='dashboard'>
        <div className='row'>
          <div className='col-1 menu py-5'>
            <button className='btn btn-menu btn-lg mx-auto' onClick={showSidebar}>
              <i className='fas fa-bars' />
            </button>
          </div>
          <div className='col-11'>
            <div className='container'>
              <div className='row row-header'>
                <div className='card my-5'>
                  <div className='card-body'>
                    <div className='d-flex flex-column mt-5 mb-3'>
                      <h1 className='display-4 my-2'>Dashborad</h1>
                      <h3 className='my-3'>
                        <i className='fas fa-user-tag mr-2' />
                        Welcome Zighed Mohammed Elamine
                      </h3>
                      <p className='my-3 lead'>
                        here you can control your profile and edit or delete
                        things and your statistic education and experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row my-5 row-content'>
                <div className='col-lg-6'>
                  <Education />
                </div>
                <div className='col-lg-6'>
                  <Experience />
                </div>
              </div>
              <div className='row my-4 row-btn'>
                <div className='col'>
                  <div className='d-flex justify-content-end'>
                    <button className='btn btn-footer btn-lg'>
                      <i className='fas fa-user-slash mr-2' />
                      Delete Your Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
};

export default Dashboard;
