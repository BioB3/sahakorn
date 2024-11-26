import Cookies from 'js-cookie';
import axios from 'axios';
import {
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL
} from './types';

export const loadUser = () => async dispatch => {
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
  };

  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/member/1/`, config);

    if (res.data.error) {
      dispatch({
        type: LOAD_PROFILE_FAIL,
      })
    } else {
      dispatch({
        type: LOAD_PROFILE_SUCCESS,
        payload: res.data
      });
    }
  } catch (err) {
    dispatch({
      type: LOAD_PROFILE_FAIL
    });
  }
}

export const updateProfile = (name) => async dispatch => {
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
  };

  const body = JSON.stringify({
    'withCredentials': true,
    name
  });

  try {
    const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/member/1/`, body, config);
    if (res.data.profile && res.data.username) {
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: UPDATE_PROFILE_FAIL
      });
    }
  } catch (err) {
    dispatch({
      type: UPDATE_PROFILE_FAIL
    });
  }
}