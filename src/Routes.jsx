import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './view/Home';
import Category from './view/Category';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/Category/:categoryName" component={Category} />
    </Switch>
  );
};

export default Routes;