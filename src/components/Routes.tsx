import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PhoneItemList from './PhoneItemList';
import CartPage from './CartPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/phones/:phoneId" component={PhoneItemList} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
