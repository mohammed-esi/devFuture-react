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
  DELETE_EDUCATION,
  DELETE_EXPERIENCE,
  CLEAR_PROFILE,
  GET_REPOS,
  NO_REPOS
} from '../types'

const ProfileState = (props) => {
  const alertContext = useContext(AlertContext);
  const {setAlert} = alertContext
  
  const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    error: {},
    loading: true
  }


  const [state, dispatch] = useReducer(profileReducer, initialState);

  
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
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    }
  }


  // Get profile by Id
  const getProfileById = async (userId) => {
    try {
      const res = await axios.get(`/api/profile/user/${userId}`)
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    }
  }


  // Get Github repos
  const getGithubRepos = async (username) => {

    try {
      const res = await axios.get(`/api/profile/github/${username}`)
      dispatch({
        type: GET_REPOS,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: NO_REPOS
      })
    }
  }



  // Create or Update profile
  const createProfile = async (formaData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/profile', formaData, config);
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.errors
      });
    }
  }

  // Add experience
  const addExperience = async (formaData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put('/api/profile/experience', formaData, config);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      }, setAlert('Experience added in your profile.', 'success'))
    } catch (err) {
      // const errors = err.response.data.errors;
      // if (errors) {
      //   errors.forEach((error) => dispatch( {type: null}, setAlert(error.msg, 'danger')));
      // }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }


  // Delete Experience
  const deleteExperience = async (id) => {
    try {
      await axios.delete(`/api/profile/experience/${id}`)
      dispatch({
        type: DELETE_EXPERIENCE,
        payload: id
      }, setAlert('Education Removed!', 'success'))
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }



  // Add education
  const addEducation = async (formaData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put('/api/profile/education', formaData, config);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      }, setAlert('Education added in your profile.', 'success'))
    } catch (err) {
      // const errors = err.response.data.errors;
      // if (errors) {
      //   errors.forEach((error) => dispatch( {type: null}, setAlert(error.msg, 'danger')));
      // }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }

  // Delete Educaition
  const deleteEducation = async (id) => {
    try {
      await axios.delete(`/api/profile/education/${id}`)
      dispatch({
        type: DELETE_EDUCATION,
        payload: id
      }, setAlert('Education Removed!', 'success'))
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }


  // Delete Account
  const deleteAccount = async () => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
      try {
        await axios.delete('/api/profile/');
        dispatch({ type: CLEAR_PROFILE }, setAlert('Your account has been deleted', 'success'))
      } catch (err) {
        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
      }
    }
  }


  // Clear profile
  const clearProfile = () => dispatch({ type: CLEAR_PROFILE })



  return (
    <ProfileContext.Provider value={{
      profile: state.profile,
      profiles: state.profiles,
      repos: state.repos,
      error: state.error,
      loading: state.loading,
      getCurrentProfile,
      createProfile,
      clearProfile,
      addEducation,
      addExperience,
      deleteEducation,
      deleteExperience,
      deleteAccount,
      getProfileById,
      getGithubRepos
    }} >
      {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileState;