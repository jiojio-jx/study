import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './route';

/* Use components to define routes */
const RouterView = () => (
  <BrowserRouter basename="/test-cli">
    <Suspense fallback={''}>
      <Switch>
        {routes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={props => {
                document.title = route?.meta?.title || 'shannZheng';
                return <route.component {...props} routes={route.component} />;
              }}></Route>
          );
        })}
        <Redirect to="/index" />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default RouterView;
