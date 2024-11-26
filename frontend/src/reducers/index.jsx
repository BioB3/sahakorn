import { combineReducers } from "@reduxjs/toolkit";
import auth from './auth'
import profile from './profile'

export default combineReducers({
  auth,
  profile
})