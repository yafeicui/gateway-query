import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import MenuPage from '@/components/menu';
import HeaderPage from '@/components/header';
import Page1 from '../1.js';
import Page2 from '../2.js';
const { Sider, Content } = Layout;

class LayoutPage extends Component {
  state = {};
  render() {
    return (
      <Layout className="layout-cont">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">122121</div>
          <MenuPage />
        </Sider>
        <Layout>
          <HeaderPage />
          <Content className="layout-content">
            <Switch>
              <Route path="/page/page1" component={Page1} />
              <Route path="/page/page2" component={Page2} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutPage;
