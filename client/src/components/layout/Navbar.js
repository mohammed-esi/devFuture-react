import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../img/LogoMaker.png';


const Navbar = () => {
  return (
    // NavBar
    <nav className="navbar navbar-expand-md navbar-user navbar-light py-3" id="main-nav">
      <Link className="navbar-brand ml-4 mr-6" to='/dashboard'>
        <img src={logo} alt='Logo' className='img-fluid' />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-3">
            <Link className="nav-link" to='/dashboard'>Developers</Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to='/dashboard'>Services</Link>
          </li>
          <li className="nav-item mx-3">
            <Link href='dashboard' className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item mx-3">
            <a href='#' className="nav-link">Logout <i className="fas fa-sign-out-alt ml-2" /></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
