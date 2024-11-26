import { configureStore } from '@reduxjs/toolkit' 
import rootReducer from './reducers'

const initialState = {};

const store = configureStore({
  reducer: rootReducer
  }
);

export default store;