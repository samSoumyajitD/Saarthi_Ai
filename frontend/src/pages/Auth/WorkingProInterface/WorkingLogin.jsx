import React from 'react';
import LoginForm from '../CommonInterface/Login/Login';

const ReporterLogin = () => {
    return (
      <div>
    
      <LoginForm 
        role="Working_Pro" 
        redirectPath="/welcomePage" // Redirect to admin dashboard after successful login
        endpoint="http://localhost:5000/api/auth/login" // Ensure endpoint matches backend
      />
      </div>
    );
  };
  

export default ReporterLogin;
