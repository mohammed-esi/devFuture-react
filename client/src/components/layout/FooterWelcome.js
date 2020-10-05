import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import imgbusinessandfiance from '../../img/business-and-finance.svg';

const FooterWelcome = () => {
  return (
    <Fragment>
      {/* Footer */}
      <footer id='main-footer' className='py-5 mt-12'>
        {/* Footer Card */}
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <div className='card'>
                <div className='card-body'>
                  <div className='d-flex justify-content-center'>
                    <img
                      src={imgbusinessandfiance}
                      alt='smart'
                      className='img-fluid mt-5 mb-3'
                    />
                  </div>
                  <div className='text-center'>
                    <h3>Go Now To Build Your Future</h3>
                    <p className='lead mt-3'>
                      we hope you like service this website and we still develop
                      this site in future so sorry for bugs and thank you.
                    </p>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <Link
                      className='nav-btn btn btn-card btn-lg mt-6 mb-2'
                      to='/getStarted'
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Information */}
        <div className='container mt-6 footer-info'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='d-flex flex-column text-center'>
                <h5 className='mb-5'>About Who Develope Web Site</h5>
                <p className='muted'>Full Name: Zighed Mohammed Elamine</p>
                <p className='muted'>
                  Email: zighed.mohammed.alamine@gmail.com
                </p>
                <p className='muted'>Field: Web Developer</p>
              </div>
            </div>
            <div className='col-md-4 offset-md-4 media-footer'>
              <div className='d-flex flex-column'>
                <h5 className='text-center'>Social Network</h5>
                <Link
                  to={'//www.facebook.com/mohammed.lamine.796/'}
                  target='_blank'
                  className='btn btn-footer d-flex justify-content-center align-items-center'
                >
                  <i className='fab fa-facebook mr-2' />
                  Facebook
                </Link>
                <Link
                  to={'//twitter.com/AlamineZighed'}
                  target='_blank'
                  className='btn btn-footer d-flex justify-content-center align-items-center'
                >
                  <i className='fab fa-twitter mr-2' />
                  Twitter
                </Link>
                <Link
                  to={'//www.instagram.com/z_mohammed_elamine/'}
                  target='_blank'
                  className='btn btn-footer d-flex justify-content-center align-items-center'
                >
                  <i className='fab fa-instagram mr-2' />
                  Instagram
                </Link>
                <Link
                  to={'//www.linkedin.com/in/zighed-mohammed-729706198/'}
                  target='_blank'
                  className='btn btn-footer d-flex justify-content-center align-items-center'
                >
                  <i className='fab fa-linkedin mr-2' />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col media-footer'>
              <div className='d-flex justify-content-center'>
                Copyright © <span id='year' />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default FooterWelcome;
