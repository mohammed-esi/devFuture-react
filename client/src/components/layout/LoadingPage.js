import React, { Fragment } from 'react'
import imgloading from '../../img/Cube-1s-200px.svg'

const LoadingPage = () => {
  return (
    <Fragment>
    {/* Loading Page */}
    <div className="d-flex justify-content-center align-items-center" id="loading">
      <img src={imgloading} alt="Loading" className="img-fluid" />
    </div>
    </Fragment>
  )
}

export default LoadingPage
