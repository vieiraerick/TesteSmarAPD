import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Rooms from './pages/Rooms';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/rooms" component={Rooms} />
      </Switch>
    </BrowserRouter>
  );
}
