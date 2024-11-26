import Cookies from 'js-cookie'
import axios from 'axios'
import { loadUser } from './profile'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from './types'

export const login = (username, password) => async dispatch => {
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/sahakorn/login`, body, config);
  
    if (res.data.success) {
      dispatch({
        type: LOGIN_SUCCESS,
      });
      dispatch(loadUser());
    } else {
      dispatch({
        type: LOGIN_FAIL
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    })
  }
}

export const logout = () => async dispatch => {
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
  };

  const body = JSON.stringify({'withCredentials': true});

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/sahakorn/logout`, body, config);
  
    if (res.data.success) {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: LOGOUT_FAIL
      });
    }
  } catch (err) {
    dispatch({
      type: LOGOUT_FAIL
    })
  }
}

export const register = (username, password, re_password) => async dispatch => {
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
  };

  const body = JSON.stringify({ username, password, re_password });

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/sahakorn/register`, body, config);

    if (res.data.error) {
      dispatch({
        type: REGISTER_FAIL
      });
    } else {
      dispatch({
        type: REGISTER_SUCCESS
      });
    }
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    })
  }
}

export const checkAuthenticated = () => async dispatch => {
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
  };

  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/sahakorn/authenticated`, config);
  
    if (res.data.isAuthenticated === 'error') {
      dispatch({
        type: AUTHENTICATED_FAIL,
        payload: false
      });
    } else if (res.data.isAuthenticated === 'success') {
      dispatch({
        type: AUTHENTICATED_SUCCESS,
        payload: true
      });
    }
  } catch (err) {
    dispatch({
      type: AUTHENTICATED_FAIL,
      payload: false
    });
  }
}

export const deleteAccount = () => async dispatch => {
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
  };

  const body = JSON.stringify({'withCredentials': true});

  try{
      res = await axios.delete(`${import.meta.env.VITE_API_URL}/sahakorn/delete`, body, config);
      if (res.data.success) {
        dispatch({
          type: DELETE_USER_SUCCESS
        });
      } else {
        dispatch({
          type: DELETE_USER_FAIL
        });
      }
  } catch (err) {
    dispatch({
      type: DELETE_USER_FAIL
    });
  }
}