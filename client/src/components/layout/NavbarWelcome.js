import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/LogoMaker.png';

const NavbarWelcome = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-light py-5' id='main-nav'>
      <Link to='/' className='navbar-brand ml-4 mr-6'>
        <img src={logo} alt='Logo' className='img-fluid' />
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <i className='fas fa-bars' />
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav'>
          <li className='nav-item mx-3'>
            <a className='nav-link' href='#welcome'>
              Home
            </a>
          </li>
          <li className='nav-item mx-3'>
            <a className='nav-link' href='#about'>
              About
            </a>
          </li>
          <li className='nav-item mx-3'>
            <a className='nav-link' href='#users'>
              Team
            </a>
          </li>
          <li className='nav-item mx-3'>
            <Link className='nav-link' to='/login'>
              Login <i className='fas fa-sign-in-alt ml-2' />
            </Link>
          </li>
          <li className='nav-item ml-22 nav-btn'>
            <Link className='btn btn-navbar btn-lg' to='/getStarted'>
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarWelcome;
