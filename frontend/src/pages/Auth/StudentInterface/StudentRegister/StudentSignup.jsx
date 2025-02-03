import React from 'react';
import RegisterForm from '../../CommonInterface/SignUp/SignUp';

const ReaderRegister = () => {
  return (
    <div>
   
      <RegisterForm role="Student" redirectPath="/student/login" />
    </div>
  );
};

export default ReaderRegister;
