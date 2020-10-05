import React, { useEffect, useContext, useState } from 'react';
import imglogin from '../../img/login.svg';
import AlerContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Alert from '../layout/Alert';
import Loading from '../layout/Loading';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  const alertConetxt = useContext(AlerContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertConetxt;
  const {
    login,
    error,
    clearErrors,
    isAuthenticated,
    loading,
    loginFacebook,
    loginGoogle,
  } = authContext;

  useEffect(() => {
    if (error === 'Invalid Credentials') {
      setAlert('password or email is not correct', 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section id='login'>
      <div className='container pt-10 pb-5'>
        <div className='row'>
          <div className='col-xl-6 offset-lg-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 offset-sm-0'>
            <div className='card'>
              <div className='card-body'>
                <div className='d-flex justify-content-center'>
                  <img
                    src={imglogin}
                    alt='smart'
                    className='img-fluid mt-5 mb-3'
                  />
                </div>
                <div className='text-center mt-4'>
                  <h3>Login</h3>
                  <Alert />
                  <div className='row py-3'>
                    <div className='col-12'>
                      <div className='d-flex justify-content-center'>
                        <button
                          onClick={loginFacebook}
                          className='btn btn-facebook btn-lg btn-block my-3'
                        >
                          <div className='d-flex justify-content-center'>
                            <i className='fab fa-facebook mr-4' />
                            Login with Facebook
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='d-flex justify-content-center'>
                        <a
                          href='http://localhost:5500/auth/google'
                          target='_blank'
                          onClick={loginGoogle}
                          className='btn btn-google btn-lg btn-block my-3'
                        >
                          <div className='d-flex justify-content-center'>
                            <i className='fab fa-google mr-4' />
                            Login with Google
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr className='my-5' />
                  <div className='d-flex justify-content-center or'>
                    <p>Or</p>
                  </div>
                </div>
                <form onSubmit={onSubmit} className='px-4 pt-3'>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      className='form-control'
                      type='email'
                      id='email'
                      name='email'
                      value={email}
                      onChange={onChange}
                      placeholder='email'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='password'>Passowrd</label>
                    <input
                      className='form-control'
                      type='password'
                      id='passowrd'
                      name='password'
                      value={password}
                      onChange={onChange}
                      placeholder='Password'
                    />
                  </div>
                  <div className='d-flex justify-content-center'>
                    {loading ? (
                      <button
                        type='submit'
                        className='btn btn-card btn-lg px-5 mt-3 mb-4'
                      >
                        <Loading />
                      </button>
                    ) : (
                      <button
                        type='submit'
                        className='btn btn-card btn-lg px-5 mt-3 mb-4'
                      >
                        Login
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
