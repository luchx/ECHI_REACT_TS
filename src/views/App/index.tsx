import React, { Component } from 'react';
import './index.scss';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routers from '../../routers';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {
            routers.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component} />
              )
            })
          }
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
