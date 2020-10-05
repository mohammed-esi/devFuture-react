import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Alert from '../layout/Alert';
import Loading from '../layout/Loading';
import { Link, Redirect } from 'react-router-dom';

const GetStarted = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {
    register,
    isAuthenticated,
    error,
    clearErrors,
    loading,
  } = authContext;

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    passwordTwo: '',
  });

  const { firstName, lastName, username, email, password, passwordTwo } = user;

  useEffect(() => {
    if (error === 'User already exists' || error === 'Username already taken') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, props.history]);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      username === '' ||
      password === ''
    ) {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== passwordTwo) {
      setAlert('Passwords do not match', 'danger');
    } else if (password.length < 6 && passwordTwo.length < 6) {
      setAlert('Password min 6 characters', 'danger');
    } else {
      register({
        firstName,
        lastName,
        email,
        username,
        password,
      });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/login' />;
  }

  return (
    <section id='get-started'>
      <div className='container pt-8 pb-4'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='card'>
              <div className='card-body'>
                <div className='mt-4'>
                  <h3 className='text-center'>Sign Up</h3>
                  <p className='mt-5'>
                    Go to create an account by register your information and
                    browse about developers here and their services
                  </p>
                  <Alert />
                </div>
                <form onSubmit={onSubmit} className='px-4 pt-3'>
                  <div className='form-group'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                      className='form-control'
                      type='text'
                      id='firstName'
                      name='firstName'
                      value={firstName}
                      onChange={onChange}
                      placeholder='First Name'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                      className='form-control'
                      type='text'
                      id='lastName'
                      name='lastName'
                      value={lastName}
                      onChange={onChange}
                      placeholder='Last Name'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input
                      className='form-control'
                      type='text'
                      id='username'
                      name='username'
                      value={username}
                      onChange={onChange}
                      placeholder='Username'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      className='form-control'
                      type='email'
                      id='email'
                      name='email'
                      value={email}
                      onChange={onChange}
                      placeholder='Email'
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
                  <div className='form-group'>
                    <label htmlFor='passwordTwo'>Config Password</label>
                    <input
                      className='form-control'
                      type='password'
                      id='passowrdTwo'
                      name='passwordTwo'
                      value={passwordTwo}
                      onChange={onChange}
                      placeholder='Config Password'
                    />
                  </div>
                  <div className='d-flex justify-content-start align-items-center'>
                    {loading ? (
                      <button
                        type='submit'
                        className='btn btn-card btn-lg px-5 mt-3 mb-4'
                        disabled
                      >
                        <Loading />
                      </button>
                    ) : (
                      <button
                        type='submit'
                        className='btn btn-card btn-lg px-5 mt-3 mb-4'
                      >
                        Sign Up
                      </button>
                    )}
                    <p className='ml-3 lead media-signup'>
                      If you've an account go <Link to='/login'>Login</Link>
                    </p>
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

export default GetStarted;
