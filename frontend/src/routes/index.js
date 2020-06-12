import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import AvailableRooms from '../pages/AvailableRooms';
import Book from '../pages/Book';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/availablerooms" component={AvailableRooms} isPrivate />
      <Route path="/book" component={Book} isPrivate />
    </Switch>
  );
}
