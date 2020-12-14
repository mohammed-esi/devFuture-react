import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  GET_REPOS,
  NO_REPOS,
  DELETE_EDUCATION,
  DELETE_EXPERIENCE
} from '../types'


export default (state, action) => {
  
  switch (action.type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      }
    case DELETE_EDUCATION:
      return {
        ...state,
        profile: { ...state.profile, education : state.profile.education.filter((education) => education._id !== action.payload) }
      }
    case DELETE_EXPERIENCE:
    return {
      ...state,
      profile: { ...state.profile, experience : state.profile.experience.filter((experience) => experience._id !== action.payload) }
    }
    case PROFILE_ERROR:
      return {
        ...state,
        profile: null,
        error: action.payload,
        loading: false,
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: []
      }
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      }
    case NO_REPOS:
      return {
        ...state,
        repos: []
      }
    default:
      return state;
  }
};