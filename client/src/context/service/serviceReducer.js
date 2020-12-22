import {
  GET_SERVICES,
  ADD_SERVICE,
  DELETE_SERVICE,
  SERVICE_ERROR,
  FILTERED_SERVICES,
  CLEAR_FILTER,
  GET_SERVICE
} from '../types'


export default (state, action) => {
  
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
        loading: false
      }
    case GET_SERVICE:
      return {
        ...state,
        service: action.payload,
        loading: false
      }
    case ADD_SERVICE:
      return {
        ...state,
        services: [action.payload, ...state.services],
        loading: false
      }
    case FILTERED_SERVICES:
      return {
        ...state,
        filtered: state.services.filter(service => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return service.title.match(regex);
        })
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: []
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