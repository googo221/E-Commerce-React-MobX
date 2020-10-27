import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'mobx-react';

import { ThemeProvider } from '@material-ui/core';
import styled from '@material-ui/styles/styled';

import theme from './theme/global';
import SideBar from './components/Bars/side-bar';
import { rootStore } from './stores/root-store';
import { unregister } from './serviceWorker';
import './index.css';
import 'mobx-react-lite/batchingForReactDom';
import { RoutesListing } from './routes/routes-listing';
import Routes from './routes/routes';
import { themeColors } from './theme/theme-colors';

const RootWrapper = styled('div')({
  height: '100%',
  paddingTop: '1rem',
  paddingLeft: '5.25rem',
  paddingRight: '1.5rem',
  backgroundColor: themeColors.grey.main,
  paddingBottom: '1rem',
});

const App = () => {
  return (
    <Provider rootStore={rootStore}>
      <Router>
        <SideBar />
        <RootWrapper>
          <Switch>
            {RoutesListing.map((route) =>
              route.path === Routes.DEFAULT ? (
                <Route
                  exact
                  key={route.path}
                  path={route.path}
                  component={() => <Redirect to={Routes.PEOPLE} />}
                />
              ) : (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              )
            )}
          </Switch>
        </RootWrapper>
      </Router>
    </Provider>
  );
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

unregister();
