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

export default (state, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      }
    case PROFILE_ERROR:
      return {
        ...state,
        profile: null,
        error: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};