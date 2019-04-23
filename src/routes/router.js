import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './private';

import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import HomePage from '../pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <PrivateRoute exact path="/" component={HomePage} />
        </Switch>
    </BrowserRouter>
)

export default Routes;