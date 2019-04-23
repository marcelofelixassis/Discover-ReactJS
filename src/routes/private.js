import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import AuthService from '../services/authService';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render = {props =>
            AuthService.userIsLogged() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/login"}} />
            )
        }
    />
)

export default PrivateRoute;