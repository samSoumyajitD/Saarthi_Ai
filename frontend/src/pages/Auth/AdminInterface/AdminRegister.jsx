import React from 'react';
import RegisterForm from '../CommonInterface/SignUp/SignUp';

const AdminRegister = () => {
  return(
  <div> 
  <div>Admin Registration</div>
   <RegisterForm role="Admin" redirectPath="/admin/login" />;
  </div>
  )
};

export default AdminRegister;
