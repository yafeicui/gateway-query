import React, { Component } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import './index.scss';
const { Header } = Layout;
class ProHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  loginout = () => {};

  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <div className="header-inner">
          <div className="logout-button">头部</div>
        </div>
      </Header>
    );
  }
}
export default withRouter(ProHeader);
