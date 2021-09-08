import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Pages/Home';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default MainRouter;
