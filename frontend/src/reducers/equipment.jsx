import {
  LOAD_LIST_SUCCESS,
  LOAD_LIST_FAIL,
  // ADD_EQUIPMENT
} from '../actions/types';

const initialState = {
  equipment: [],
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_LIST_SUCCESS:
      return {
        ...state,
        equipment: payload
      };

    case LOAD_LIST_FAIL:
      return state;

    // case ADD_EQUIPMENT:
    //   return {
    //     ...state,
    //     equipment: [...state.equipment, payload] // Adds the new equipment to the list
    //   };

    default:
      return state;
  }
}
