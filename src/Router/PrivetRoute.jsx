// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import UseAuth from '../Hook/UseAuth';

function PrivateRoute({ children }) {
  const isAuthenticated = UseAuth();
  return isAuthenticated ? children : <Navigate to="/login" />
}

export default PrivateRoute;
