import Cookies from 'js-cookie';
import axios from 'axios';
import {
  LOAD_LIST_SUCCESS,
  LOAD_LIST_FAIL
} from './types';


export const loadEquipments = () => async dispatch => {
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
  };

  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/equipment/`, config);
  try {
    if (response.data.error) {
      dispatch({
        type: LOAD_LIST_FAIL
      })
    }
    else {
      dispatch({
        type: LOAD_LIST_SUCCESS,
        payload: response.data
      })
    }
  } catch(err) {
    dispatch({
      type: LOAD_LIST_FAIL
    })
  }
}