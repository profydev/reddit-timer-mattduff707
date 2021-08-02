import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <Switch>
      <Route exact path="/">
        <h2>Main</h2>
      </Route>
      <Route path="/search">
        <h2>Search</h2>
      </Route>
    </Switch>
  );
}
export default Main;
