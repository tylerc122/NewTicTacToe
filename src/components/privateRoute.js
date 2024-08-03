import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = !!localStorage.getItem('token'); // Example authentication check

    return (
        <Route
            {...rest}
            element={isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;