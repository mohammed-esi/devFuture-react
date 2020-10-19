import React, { Fragment } from 'react';
import DashboardSideNav from './DashboardSideNav';
import Education from './Education';
import Experience from './Experience';

const Dashboard = () => {
  return (
    <Fragment>
      <DashboardSideNav />
      {/* Dashboard */}
      <section id='dashboard'>
        <div className='row'>
          <div className='col-1 menu py-5'>
            <button className='btn btn-menu btn-lg mx-auto openbtn'>
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
  );
};

export default Dashboard;
