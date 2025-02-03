import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'; // Import js-cookie library for cookie handling

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
    token: Cookies.get('token') || null,
    role: Cookies.get('role') || null,
  },
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.role = user.role;

      // Store in cookies
      Cookies.set('user', JSON.stringify(user), { secure: true, sameSite: 'Strict' });
      Cookies.set('token', token, { secure: true, sameSite: 'Strict' });
      Cookies.set('role', user.role, { secure: true, sameSite: 'Strict' });
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;

      // Clear cookies
      Cookies.remove('user');
      Cookies.remove('token');
      Cookies.remove('role');
    },
    register: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.role = user.role;

      // Store in cookies
      Cookies.set('user', JSON.stringify(user), { secure: true, sameSite: 'Strict' });
      Cookies.set('token', token, { secure: true, sameSite: 'Strict' });
      Cookies.set('role', user.role, { secure: true, sameSite: 'Strict' });
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
