import {
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL
} from '../actions/types'

const initialState = {
  username: '',
  name: '',
  producer_type: ''
};

export default function(state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case LOAD_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        username: payload.username,
        name: payload.profile.name,
        producer_type: payload.profile.produce_type
      }
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        username: '',
        name: '',
        producer_type: ''
      }
    case UPDATE_PROFILE_FAIL:
      return {
        ...state
      }
    default:
      return state
  };
}