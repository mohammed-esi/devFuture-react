import React, {Fragment, useContext, useState, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import ProfileContext from '../../context/profile/profileContext'
import Education from './Education'
import Experience from './Experience'
import Loading from '../layout/Loading'
import DashboardSideBar from './DashboardSideBar'


// import persontwo from '../../img/person-two.png';


const Dashboard = (props) => {
  const authcontext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const {logout, user} = authcontext;
  const { profile, getCurrentProfile, clearProfile, deleteAccount, loading } = profileContext;

  const [ displayLoading, setDispalyLoading ] = useState(false)

  useEffect(() => {
    getCurrentProfile()
    // eslint-disable-next-line
  }, [])


  const onLogout = () => {
    logout();
    clearProfile()
  }

  const onDelete = () => {
    setDispalyLoading(!displayLoading)
    setTimeout(() => {
      deleteAccount();
      logout();
      setDispalyLoading(displayLoading)
      props.history.push('/login')
    }, 2000)
  }

  return (
    <Fragment>
      {/* Dashboard Side Bar */}
      <DashboardSideBar 
      user={user} 
      profile={profile} 
      loading={loading} 
      sidebar={sidebar} 
      onLogout={onLogout} 
      showSidebar={showSidebar} />
      
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
                <div className='card mt-5 mb-2'>
                  <div className='card-body'>
                    <div className='d-flex flex-column mt-5 mb-3'>
                      <h1 className='display-4 my-2'>Dashborad</h1>
                      <h3 className='my-3'>
                        <i className='fas fa-user-tag mr-2' />
                        Welcome {user && user.firstName + ' ' + user.lastName}
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
                <div className='col-sm-12 my-3'>
                  <Education />
                </div>
                <div className='col-sm-12 my-3'>
                  <Experience />
                </div>
              </div>
              <div className='row my-4 row-btn'>
                <div className='col'>
                  <div className='d-flex justify-content-end'>
                  {displayLoading ? (
                    <button className="btn btn-footer btn-lg px-5 py-2" disabled>
                      <Loading />
                    </button>
                  ) : (
                    <button className='btn btn-footer btn-lg' onClick={onDelete}>
                      <i className='fas fa-user-slash mr-2' />
                      Delete Your Account
                    </button>
                  )}
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
