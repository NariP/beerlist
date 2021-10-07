import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PageRoutes } from './page.routes';
// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {PageRoutes.map((route, idx) => {
          const Component = route.component;
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          return (
            <Route
              key={idx}
              exact={route.exact}
              path={route.path}
              render={() => (
                <Guard>
                  <Layout>
                    <Component />
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default Routes;
