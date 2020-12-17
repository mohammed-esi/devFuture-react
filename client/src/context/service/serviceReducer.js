import {
  GET_SERVICES,
  ADD_SERVICE,
  DELETE_SERVICE,
  SERVICE_ERROR
} from '../types'


export default (state, action) => {
  
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
        loading: false
      }
    case ADD_SERVICE:
      return {
        ...state,
        services: [action.payload, ...state.services],
        loading: false
      }
    case SERVICE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
};