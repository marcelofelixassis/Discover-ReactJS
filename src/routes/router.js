import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './private';

import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/" component={HomePage} />
        </Switch>
    </BrowserRouter>
)

export default Routes;