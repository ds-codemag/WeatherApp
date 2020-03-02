import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
// Pages
import HomePage from '../../pages/home';
import AddUserPage from '../../pages/add-user';
import EditUserPage from '../../pages/edit-user';
import UserDetailsPage from '../../pages/user-details';
import LoginPage from '../../pages/login';

const RouterOutlet = () => (
  <Switch>
    <Route path="/login" component={LoginPage}></Route>
    <PrivateRoute path="/add-user" component={AddUserPage}></PrivateRoute>
    <PrivateRoute path="/edit-user/:id" component={EditUserPage}></PrivateRoute>
    <Route path="/users/:id" component={UserDetailsPage}></Route>
    <Route path="/" component={HomePage}></Route>
  </Switch>
);

export default RouterOutlet;
