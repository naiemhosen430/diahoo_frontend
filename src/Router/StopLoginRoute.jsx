
import React from 'react';
import { Navigate } from 'react-router-dom';
import UseAuth from '../Hook/StopLogin';


function StopLoginRoute({ children }) {
  const isAuthenticated = UseAuth();
  return isAuthenticated ? children : <Navigate to="/" />
}

export default StopLoginRoute;

