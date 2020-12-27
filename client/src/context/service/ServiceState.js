import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import ServiceContext from './serviceContext'
import serviceReducer from './serviceReducer'
import AlertContext from '../alert/alertContext'
import {
  GET_SERVICES,
  ADD_SERVICE,
  DELETE_SERVICE,
  SERVICE_ERROR,
  FILTERED_SERVICES,
  CLEAR_FILTER,
  GET_SERVICE,
  UPDATE_LIKES,
  ADD_COMMENT,
  DELETE_COMMENT,
} from '../types'

const ServiceState = (props) => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext

  const initialState = {
    services: [],
    filtered: [],
    service: null,
    loading: true,
    error: {}
  }


  const [state, dispatch] = useReducer(serviceReducer, initialState);


  // Get all services
  const getServices = async () => {
    setTimeout(async () => {
      try {
        const res = await axios.get('/api/services');
        dispatch({
          type: GET_SERVICES,
          payload: res.data
        })
      } catch (err) {
        dispatch({
          type: SERVICE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        })
      }
    }, 2000);
  }

  // Get service by ID 
  const getServiceById = async (id) => {
    setTimeout(async () => {
      try {
        const res = await axios.get(`/api/services/${id}`);
        dispatch({
          type: GET_SERVICE,
          payload: res.data
        })
      } catch (err) {
        dispatch({
          type: SERVICE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        })
      }
    }, 2000);
  }


  // Create a service
  const createService = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/services', formData, config);
      dispatch({
        type: ADD_SERVICE,
        payload: res.data
      }, setAlert('Service is created success!', 'success'));
    } catch (err) {
      console.log(err.response.data)
      dispatch({
        type: SERVICE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    }
  }

  // Add like on service
  const addLike = async (id) => {
    try {
      const res = await axios.put(`/api/services/like/${id}`)
      dispatch({
        type: UPDATE_LIKES,
        payload: {id, likes: res.data}
      })
    } catch (err) {
      dispatch({
        type: SERVICE_ERROR,
        payload: err.response.data
      });
    }
  }

  // Remove like on service
  const removeLike = async (id) => {
    try {
      const res = await axios.put(`/api/services/unlike/${id}`)
      dispatch({
        type: UPDATE_LIKES,
        payload: {id, likes: res.data}
      })
    } catch (err) {
      dispatch({
        type: SERVICE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }

  // Add Comment is service
  const addComment = async (serviceId, formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(`/api/services/comment/${serviceId}`, formData, config)
      dispatch({
        type: ADD_COMMENT,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: SERVICE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }


  // Delete Comment is service
  const deleteComment = async (serviceId, commentId) => {
    try {
      const res = await axios.post(`/api/services/comment/${serviceId}/${commentId}`)
      dispatch({
        type: DELETE_COMMENT,
        payload: commentId
      })
    } catch (err) {
      dispatch({
        type: SERVICE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }


  // Fiter services
  const filterServices = (text) => {
    dispatch({ type: FILTERED_SERVICES, payload: text })
  }


  // Clear filtered
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }







  return (
    <ServiceContext.Provider value={{
      service: state.service,
      services: state.services,
      filtered: state.filtered,
      error: state.error,
      loading: state.loading,
      getServices,
      createService,
      filterServices,
      clearFilter,
      getServiceById,
      addLike,
      removeLike,
      addComment,
      deleteComment
    }} >
      {props.children}
    </ServiceContext.Provider>
  )
}

export default ServiceState
