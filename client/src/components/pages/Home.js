import React, { Fragment } from 'react';
import NavbarWelcome from '../layout/NavbarWelcome';
import FooterWelcome from '../layout/FooterWelcome';
import imgprovider from '../../img/provider.svg';
import imgidea from '../../img/idea.svg';
import imgcomment from '../../img/comment.svg';
import imgadd from '../../img/add.svg';
import imggraphicdesign from '../../img/graphic-design.svg';
import imgsocialnetwork from '../../img/social-network.svg';
import imgaboutpicture from '../../img/about-picture.svg';
import imgteamsvg from '../../img/team.svg';
import imgpersonone from '../../img/person-one.jpg';
import imgpersonthree from '../../img/person-three.png';
import imgpersontwo from '../../img/person-two.png';

const Home = () => {
  return (
    <Fragment>
      {/* Header */}
      <header id='welcome'>
        {/* NavBar */}
        <NavbarWelcome />

        {/* Text Header */}
        <div className='container text-header'>
          <div className='row'>
            <div className='col-md-6 col-sm-12 offset-md-3 pt-10'>
              <div className='d-flex flex-column'>
                <h3 className='display-4'>ALL DEVELOPERS IN</h3>
                <h3 className='display-4'>THE WORLD</h3>
                <h3 className='display-4'>AND SERVICES</h3>
                <p className='mr-3 mt-3'>
                  Join with us and make your services or search a service in
                  good develoeprs in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section About */}
      <section id='about'>
        {/* About Cards */}
        <div className='container-fluid pt-6'>
          <div className='row'>
            <div className='col-lg-4 px-4 py-2'>
              <div className='card'>
                <div className='card-body'>
                  <div className='d-flex'>
                    <img
                      src={imgprovider}
                      alt='smart'
                      className='img-fluid pr-2'
                      width={'50px'}
                      height={'50px'}
                    />
                    <h5 className='align-items-center'>Make Your Service</h5>
                  </div>
                  <p className='my-3'>
                    This is website you may to share your service to all
                    developers in this site and get notes and advices their,
                    just make your service and share to them and get the best
                    advices in the website.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 px-4 py-2'>
              <div className='card'>
                <div className='card-body'>
                  <div className='d-flex'>
                    <img
                      src={imgidea}
                      alt='smart'
                      className='img-fluid pr-2'
                      width={'50px'}
                      height={'50px'}
                    />
                    <h5 className='align-items-center'>
                      knowledge About Various Developers
                    </h5>
                  </div>
                  <p className='my-3'>
                    In the world there is many professionnel developers and here
                    you can found some them so make an account and go to
                    discovery this world.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 px-4 py-2'>
              <div className='card'>
                <div className='card-body'>
                  <div className='d-flex'>
                    <img
                      src={imgcomment}
                      alt='smart'
                      className='img-fluid pr-2'
                      width={'50px'}
                      height={'50px'}
                    />
                    <h5 className='align-items-center'>Put Your Advice</h5>
                  </div>
                  <p className='my-3'>
                    You can add a comment to all services here to advice or
                    request the service to create your project just contact
                    service owner in his social network and go ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About More */}
        <div className='container mt-5 about-more'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1 col-md-12'>
              <div className='row'>
                <div className='col-lg-6 col-md-12'>
                  <h3>
                    How start to make your services or find good services or
                    greater developers?
                  </h3>
                  <div className='container mt-4'>
                    <div className='d-flex'>
                      <img
                        src={imgadd}
                        alt='smart'
                        className='img-fluid pr-2 align-self-center'
                        width={'50px'}
                        height={'50px'}
                      />
                      <div className='d-flex-colum'>
                        <h5>Create an account!</h5>
                        <p>
                          Just click on bottom Get statrted and start to create
                          an account by your information.
                        </p>
                      </div>
                    </div>
                    <div className='d-flex'>
                      <img
                        src={imggraphicdesign}
                        alt='smart'
                        className='img-fluid pr-2 align-self-center'
                        width={'50px'}
                        height={'50px'}
                      />
                      <div className='d-flex-colum'>
                        <h5>Make a good profile</h5>
                        <p>
                          After create an account go to dashboard to create a
                          greate profile by your information (your experience
                          and eduction and what your fiel in programmation ..
                          etc).
                        </p>
                      </div>
                    </div>
                    <div className='d-flex'>
                      <img
                        src={imgsocialnetwork}
                        alt='smart'
                        className='img-fluid pr-2 align-self-center'
                        width={'50px'}
                        height={'50px'}
                      />
                      <div className='d-flex-colum'>
                        <h5>Share your service or Search</h5>
                        <p>
                          Just go to post your service in website and got all
                          advices by develoeprs and searche services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <img
                    src={imgaboutpicture}
                    alt='smart'
                    className='img-fluid align-self-center w-auto h-50 pl-3 d-none d-lg-block'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container about-end'>
          <div className='row'>
            <div className='col-md-10 offset-md-1 text-center'>
              <h3>what you waiting for just join us</h3>
              <p className='lead'>
                We've a simple registration in this website and after create an
                account don't worry about login after go out in this website
                just click in Google or Facebook ot login.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Users */}
      <section id='users'>
        {/* Header Users*/}
        <div className='container pt-12'>
          <div className='row'>
            <div className='col-md-10 offset-md-1 text-center'>
              <img
                src={imgteamsvg}
                alt='smart'
                className='img-fluid align-items-center w-25 h-25 mb-5'
              />
              <h3>Some Developers To Level Professionnel</h3>
              <p className='muted'>
                This is some developers in this website and them whose develope
                this website
              </p>
            </div>
          </div>
        </div>
        {/* Users Cards */}
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4 px-4'>
              <div className='card'>
                <div className='card-body'>
                  <div className='d-flex'>
                    <img
                      src={imgpersonone}
                      alt='smart'
                      className='img-fluid rounded-circle p-2'
                      width={'100px'}
                      height={'100px'}
                    />
                    <div className='d-flex-column align-self-center'>
                      <h5>Jouly Danber</h5>
                      <h6 className='muted'>Web Developer</h6>
                    </div>
                  </div>
                  <p className='my-2 mx-3'>
                    I'm frontend web developer use Angular and Material Ui.
                  </p>
                  <p className='mt-2 text-center'>
                    <span className='badge badge-pill badge-green'>
                      Angular9
                    </span>
                    <span className='badge badge-pill badge-green'>
                      Css/Css3
                    </span>
                    <span className='badge badge-pill badge-green'>Html</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 px-4'>
              <div className='card'>
                <div className='card-body'>
                  <div className='d-flex'>
                    <img
                      src={imgpersonthree}
                      alt='smart'
                      className='img-fluid rounded-circle p-2'
                      width={'100px'}
                      height={'100px'}
                    />
                    <div className='d-flex-column align-self-center'>
                      <h5>Joen Due</h5>
                      <h6 className='text-muted'>Designer</h6>
                    </div>
                  </div>
                  <p className='my-2 mx-3'>
                    I'm designer with 2+ years of experience in PS and Adobe Xd
                  </p>
                  <p className='mt-2 text-center'>
                    <span className='badge badge-pill badge-green'>
                      Adobe Ps
                    </span>
                    <span className='badge badge-pill badge-green'>
                      Adobe PR
                    </span>
                    <span className='badge badge-pill badge-green'>
                      Adobe AI
                    </span>
                    <span className='badge badge-pill badge-green'>
                      Adobe Xd
                    </span>
                    <span className='badge badge-pill badge-green'>
                      Wordpress
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 px-4'>
              <div className='card'>
                <div className='card-body'>
                  <div className='d-flex'>
                    <img
                      src={imgpersontwo}
                      alt='smart'
                      className='img-fluid rounded-circle p-2'
                      width={'100px'}
                      height={'100px'}
                    />
                    <div className='d-flex-column align-self-center'>
                      <h5>Zighed Mohammed Elamine</h5>
                      <h6 className='muted'>Web Developer</h6>
                    </div>
                  </div>
                  <p className='my-2 mx-3'>
                    I'm full-stack web develoepr use javascript and node.js
                    technologies.
                  </p>
                  <p className='mt-2 text-center'>
                    <span className='badge badge-pill badge-green'>
                      React.js
                    </span>
                    <span className='badge badge-pill badge-green'>
                      Express.js
                    </span>
                    <span className='badge badge-pill badge-green'>
                      MongoDB
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterWelcome />
    </Fragment>
  );
};

export default Home;
