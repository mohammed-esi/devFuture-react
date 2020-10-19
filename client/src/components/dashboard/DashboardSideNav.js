import React, { Fragment, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Redirect } from 'react-router-dom'
import persontwo from '../../img/person-two.png';

export default function DashboardSideNav() {
  const authcontext = useContext(AuthContext);

  const {logout} = authcontext;

  const onLgout = () => {
    logout();
    return <Redirect to='/login' />
  }


  return (
    <Fragment>
      {/* Nav Side */}
      <div id='mySidenav' className='sidenav'>
        <button className='btn closebtn'>×</button>
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
    </Fragment>
  );
}
