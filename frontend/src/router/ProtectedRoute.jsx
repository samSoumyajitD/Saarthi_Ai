import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, roles }) => {
  const { user, role } = useSelector((state) => state.auth);

  // Redirect to login if the user is not authenticated
  if (!user) {
    return <Navigate to="/" />;
  }

  // Check if the user's role is allowed to access the route
  if (roles && !roles.includes(role)) {
    return <Navigate to="/unauthorized" />; // Redirect to an unauthorized page
  }

  return children;
};

export default ProtectedRoute;
