import React from 'react';
import LoginForm from '../CommonInterface/Login/Login';

const AdminLogin = () => {
    return (
      <div>
      <div>Admin Login</div>
      <LoginForm 
        role="Admin"
        redirectPath="/dashboard" // Redirect to admin dashboard after successful login
        endpoint="http://localhost:5000/api/auth/login" // Ensure endpoint matches backend
      />
      </div>
    );
  };
  

export default AdminLogin;
