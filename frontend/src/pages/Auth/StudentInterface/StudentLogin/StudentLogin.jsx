import React from 'react';
import LoginForm from '../../CommonInterface/Login/Login';

const Login = () => {
  return (<div>
  
    <LoginForm 
      role="Student" // Default role for general users
      redirectPath="/welcomePage" // Redirect to articles page
      endpoint="http://localhost:5000/api/auth/login" // Login endpoint
    />
  </div>
  );
};


export default Login;
