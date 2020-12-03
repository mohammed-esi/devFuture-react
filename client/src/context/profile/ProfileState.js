import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import ProfileContext from './profileContext'
import profileReducer from './profileReducer'
import AlertContext from '../alert/alertContext'
import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_REPOS,
  NO_REPOS
} from '../types'

const ProfileState = (props) => {
  const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    error: {},
    loading: true
  }


  const [state, dispatch] = useReducer(profileReducer, initialState);

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  
  // Get current users profile
  const getCurrentProfile = async () => {
    try {
      const res = await axios.get('/api/profile/me');
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {msg: err.response.statusText , status: err.response.status}
      })
    }
  }



  // Create or Update profile
  const createProfile = async (formatDate, history, edit = false) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/profile', formatDate, config);
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })

      dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created' , 'success'));

      if (!edit) {
        history.push('/dashboard');
      }
    } catch (err) {
      const errors = err.response.data.errors

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }



  return (
    <ProfileContext.Provider value={{
      profile: state.profile,
      profiles: state.profiles,
      repos: state.repos,
      error: state.error,
      loading: state.loading,
      getCurrentProfile,
      createProfile
    }} >
      {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileState;