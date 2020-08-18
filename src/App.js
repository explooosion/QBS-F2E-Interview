import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Routes from './routes';

import Header from './containers/Header';
import Footer from './containers/Footer';

import { getProducts } from './services/Products';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  });

  const renderRoute = route => {
    const { key, path, exact, component: Component, title } = route;
    return (
      <Route
        key={key}
        exact={exact}
        path={path}
        title={title}
        render={props => (
          <div>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <Component {...props} />
          </div>
        )}
      />
    );
  }

  return (
    <Router>
      <Header />
      <Switch>
        {Routes.map(renderRoute)}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
