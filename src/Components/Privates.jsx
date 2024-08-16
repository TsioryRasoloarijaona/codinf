import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  const Auth = cookies.get('token')
  return Auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;