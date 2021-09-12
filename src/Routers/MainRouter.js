import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../Pages/HomePage';
import ProjectPage from '../Pages/ProjectPage';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/project" component={ProjectPage} />
    </Switch>
  );
};

export default MainRouter;
