import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import IndexRouter from '../pages/index';
class RouterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="router-content">
        <Switch>
          {/* <Route path="/" exact>
						<Redirect to="/login" />
					</Route>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} /> */}
          <Route path="/page" component={IndexRouter} />
        </Switch>
      </div>
    );
  }
}

export default RouterPage;
