import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice'
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  
  users: userReducer, 
 profile:profileReducer
  },
});

export default store;
