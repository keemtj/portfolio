import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../Pages/HomePage';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default MainRouter;
