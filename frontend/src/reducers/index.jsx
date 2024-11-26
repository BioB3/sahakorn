import { combineReducers } from "@reduxjs/toolkit";
import auth from './auth'
import profile from './profile'
import equipment from "./equipment";

export default combineReducers({
  auth,
  profile,
  equipment
})