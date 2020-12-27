import React, { Fragment, useContext, useEffect, useState } from 'react'
import ServiceContext from '../../context/service/serviceContext'
import ServiceAbout from './ServiceAbout'
import ServiceInformationUser from './ServiceInformationUser'
import InputComment from './InputComment'
import Comments from './Comments'
import Loading from '../layout/Loading'

const Service = (props) => {
  const serviceContext = useContext(ServiceContext)
  const { getServiceById, service, loading } = serviceContext;

  const [ displayLoading, setDispalyLoading ] = useState(false)

  const [ displayComments, setDisplayComments ] = useState(false)
  const showComments = () => {
    setDispalyLoading(!displayLoading)
    setTimeout(() => {
      setDisplayComments(!displayComments);
      setDispalyLoading(displayLoading)
    }, 2000);
  }

  useEffect(() => {
    getServiceById(props.match.params.id)
  }, [getServiceById])

  return (
    <Fragment>
      {/* Section Service */}
      <section id="service" className="pt-6 pb-5">
        <div className="container">
          <div className="row">
            <Fragment>
              {loading && (
                <div className='col'>
                  <div className="d-flex justify-content-center align-items-center my-18">
                    <h6 className="my-2">
                      <Loading />
                    </h6>
                  </div>
                </div>
              )}
            </Fragment>
            {!loading && service && (
              <Fragment>
                <div className="col-md-9">
                  <ServiceAbout key={service._id} service={service} showComments={showComments} />
                </div>
                <div className="col-md-3">
                  <ServiceInformationUser key={service._id} service={service} />
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </section>
      {/* Seciton of comments */}
      {displayLoading ? (
        <section id="service" className="pt-6 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="d-flex justify-content-center align-items-center my-6">
                  <h6 className="my-2">
                    <Loading />
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Fragment>
          {displayComments && (
            <section id="service" className="pt-6 pb-5">
              <div className="container">
                <div className="row">
                  <div className="col-sm-9">
                    <div className="card card-user">
                      <div className="card-body">
                        {!loading && service && (
                          <Fragment>
                            <InputComment serviceId={service._id} />
                            <Comments comments={service.comments} />
                          </Fragment>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

export default Service
