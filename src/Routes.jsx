import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './view/Home';
import Category from './view/Category';
import Product from './view/Product';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/product/:id" component={Product} />
      <Route path="/category/:categoryName/:id?" component={Category} />
    </Switch>
  );
};

export default Routes;