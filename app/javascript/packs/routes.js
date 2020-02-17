import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/configureStore';
import Navbar from './navbar/navbar';
import Tabs from './navbar/tabs';

import CategoryDashboard from './components/categories/index';
import StoreDashboard from './components/stores/index';
import ProductDashboard from './components/products/index';

const initialState = {};
const store = configureStore(initialState);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={Navbar} />
      <Route path="/" component={Tabs} />
      <Switch>
        <Route
          path="/products"
          component={ProductDashboard}
        />
        <Route
          path="/stores"
          component={StoreDashboard}
        />
        <Route
          path="/categories"
          component={CategoryDashboard}
        />
      </Switch>
      <Redirect from="/" exact to="/stores" />
    </ConnectedRouter>
  </Provider>
);

export default App;
