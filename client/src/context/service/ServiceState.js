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
  GET_SERVICE
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
  }

  // Get service by ID 
  const getServiceById = async (id) => {
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
      getServiceById
    }} >
      {props.children}
    </ServiceContext.Provider>
  )
}

export default ServiceState
