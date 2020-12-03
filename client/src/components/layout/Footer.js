import React, {Fragment} from 'react'

const Footer = () => {
  return (
    <Fragment>
    {/* Footer */}
      <footer id="main-footer" className="py-6">
        {/* Footer Information */}
        <div className="container footer-info">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex flex-column text-center">
                <h5 className="mb-5">About Who Develope Web Site</h5>
                <p className="muted">Full Name: Zighed Mohammed Elamine</p>
                <p className="muted">Email: zighed.mohammed.alamine@gmail.com</p>
                <p className="muted">Field: Web Developer</p>
              </div>
            </div>
            <div className="col-md-4 offset-md-4 media-footer">
              <div className="d-flex flex-column">
                <h5 className="text-center">Social Network</h5>
                <a href="https://www.facebook.com/mohammed.lamine.796/" target="_blank" className="btn btn-footer d-flex justify-content-center align-items-center">
                  <i className="fab fa-facebook mr-2" />
                  Facebook
                </a>
                <a href="https://twitter.com/AlamineZighed" target="_blank" className="btn btn-footer d-flex justify-content-center align-items-center">
                  <i className="fab fa-twitter mr-2" />
                  Twitter
                </a>
                <a href="https://www.instagram.com/z_mohammed_elamine/" target="_blank" className="btn btn-footer d-flex justify-content-center align-items-center">
                  <i className="fab fa-instagram mr-2" />
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/zighed-mohammed-729706198/" target="_blank" className="btn btn-footer d-flex justify-content-center align-items-center">
                  <i className="fab fa-linkedin mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col media-footer">
              <div className="d-flex justify-content-center">
                Copyright © <span id="year" />
              </div>
            </div>
          </div>
        </div>
      </footer>
</Fragment>
  )
}

export default Footer
