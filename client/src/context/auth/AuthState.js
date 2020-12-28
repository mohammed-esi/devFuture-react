import React, { useContext, useReducer } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import AuthContext from './authContext';
import authReducer from './authReducer';
import AlertContext from '../alert/alertContext'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  SET_LOADING,
  STOP_LOADING,
  LOGIN_FACEBOOK,
  LOGIN_FACEBOOK_FAIL,
  LOGIN_GOOGLE,
  LOGIN_GOOGLE_FAIL
} from '../types';

const AuthState = (props) => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext

  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    setAuthToken(localStorage.token);

    setTimeout(async () => {
      try {
        const res = await axios.get('/api/auth');
  
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: AUTH_ERROR,
        });
      }
    }, 2000);
  };

  // Register User
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setLoading();
    try {
      const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      const errors = err.response.data;
      if (errors) {
        dispatch({ type: REGISTER_FAIL}, setAlert(errors.msg, 'danger'));
      } else {
        dispatch({
          type: REGISTER_FAIL,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
      }
    }
  };

  // Login
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setLoading();
    try {
      const res = await axios.post('/api/auth', formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      const errors = err.response.data;
      if (errors) {
        dispatch({ type: LOGIN_FAIL}, setAlert(errors.msg, 'danger'));
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
      }
    }
  };

  // Login with Google
  const loginGoogle = async () => {
    setLoading();
    try {
      const res = await axios.get('/auth/google/callback');
      dispatch({
        type: LOGIN_GOOGLE,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_GOOGLE_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login with Facebook
  const loginFacebook = async () => {
    setLoading();
    try {
      const res = await axios.get('/auth/facebook/callback');
      dispatch({
        type: LOGIN_FACEBOOK,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FACEBOOK_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Logout
  const logout = () => {
    setLoading()
    setTimeout(() => {
      dispatch({ type: LOGOUT });
    }, 2000);
  }

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Stop Loading
  const stopLoading = () => dispatch({ type: STOP_LOADING });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        loadUser,
        register,
        setLoading,
        stopLoading,
        clearErrors,
        login,
        loginFacebook,
        loginGoogle,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
