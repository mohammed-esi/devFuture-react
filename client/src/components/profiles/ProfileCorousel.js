import React, { Fragment } from 'react'

import imgonecorou from '../../img/team_work.svg'
import imgtwocorou from '../../img/seo_isometric.svg'
import imgthreecorou from '../../img/creative_process_isometric.svg'

const ProfileCorousel = () => {
  return (
    <Fragment>
      {/* Section Carousel */}
      <section id="carsoule-section-devs">
        <div className="row">
          {/* SLIDER WITH CONTROLS */}
          <div id="slider3" className="carousel slide mt-6 mb-5" data-ride="carousel">
            <ol className="carousel-indicators">
              <li className="active" data-target="#slider3" data-slide-to={0} />
              <li data-target="#slider3" data-slide-to={1} />
              <li data-target="#slider3" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="text-center my-8">
                      <h1>You Can Find Your Team</h1>
                      <p className="my-4">look at developers are help you for any problems or build your team with them.</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <img src={imgonecorou} className="img-fluid w-100 h-100 my-4 d-none d-lg-block" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="text-center my-8">
                      <h1>Learn How To Planing Your Future</h1>
                      <p className="my-4">Here you can find people are can help you to planning your projects and work on those problems and achievement it in short time</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <img src={imgtwocorou} alt="Logo" className="img-fluid w-100 h-100 d-none d-lg-block" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="text-center my-8">
                      <h1>Go Out AlL Bad Thinks About Developers</h1>
                      <p className="mt-4">all developers in the world thought programmation that's it very hard and impossible to learn and work it out so just look </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <img src={imgthreecorou} alt="Logo" className="img-fluid w-100 h-100 d-none d-lg-block" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default ProfileCorousel
