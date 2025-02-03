import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logout } from '../../../redux/slices/authSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call backend logout endpoint
      await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });

      // Dispatch Redux logout action
      dispatch(logout());

      // Redirect to the login page
      navigate('/');
      alert('Logged out successfully');
    } catch (error) {
      alert(error.response?.data?.message || 'Logout failed');
    }
  };

  return (
    <div>
      <h2>Are you sure you want to logout?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
