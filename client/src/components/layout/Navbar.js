import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ProfileContext from '../../context/profile/profileContext'
import logo from '../../img/LogoMaker.png';


const Navbar = () => {
  const authContext = useContext(AuthContext)
  const profileContext = useContext(ProfileContext)

  const { loading, isAuthenticated, logout } = authContext;
  const { clearProfile } = profileContext

  const onLogout = () => {
    logout();
    // clearProfile();
  }


  return (
    // NavBar
    <nav className="navbar navbar-expand-md navbar-user navbar-light py-3" id="main-nav">
      {isAuthenticated && !loading ? (
        <Link className="navbar-brand ml-4 mr-6" to='/dashboard'>
          <img src={logo} alt='Logo' className='img-fluid' />
        </Link>
      ) : (
        <Link className="navbar-brand ml-4 mr-6" to='/'>
          <img src={logo} alt='Logo' className='img-fluid' />
        </Link>
      )}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {isAuthenticated && !loading ? (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-3">
              <Link className="nav-link" to='/profiles'>Developers</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to='/services'>Services</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to='/dashboard'>Dashboard</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to='#' onClick={onLogout} className="nav-link">Logout <i className="fas fa-sign-out-alt ml-2" /></Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-3">
              <Link className="nav-link" to='/'>Developers</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to='/getStarted'>Sign Up</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to='/login'>Login</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
