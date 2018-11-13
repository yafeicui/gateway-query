import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import RouterPage from './router';

class App extends Component {
  render() {
    return (
      <Router>
        <RouterPage />
      </Router>
    );
  }
}

export default App;
