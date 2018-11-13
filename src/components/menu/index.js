import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import menuData from './menu-data.js';
import './index.css';

const SubMenu = Menu.SubMenu;

class ProMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: []
    };
  }
  componentDidMount() {
    this.setState({
      menuData
    });
  }
  setHash = () => {
    let url = window.location.hash;
    let activeUrl = url.split('#')[1];
    return activeUrl;
  };
  handleClick = e => {
    this.props.history.push(e.key);
  };
  formSubmenusChild = obj => {
    let cHtml = <div />;
    let childArray = obj.children;
    if ('undefined' !== typeof childArray && childArray.length > 0) {
      cHtml = childArray.map((item, i) => {
        return this.formSubmenusChild(item);
      });
      return (
        <SubMenu
          key={obj.path}
          title={
            <span>
              <Icon type={obj.icon} />
              <span>{obj.name}</span>
            </span>
          }
        >
          {cHtml}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item routeurl={obj.path} key={obj.path}>
          {obj.name}
        </Menu.Item>
      );
    }
  };
  render() {
    let current = this.setHash();
    const html = this.state.menuData.map((obj, i) => {
      if ('undefined' !== typeof obj.children && obj.children.length > 0) {
        return this.formSubmenusChild(obj);
      } else {
        //这里的routeurl是路由地址，是自定义的一个属性
        return (
          <Menu.Item routeurl={obj.path} key={obj.path}>
            <Icon type={obj.icon} />
            {obj.name}
          </Menu.Item>
        );
      }
    });

    return (
      <div className="menu-position">
        <Menu
          theme="dark"
          onClick={this.handleClick}
          style={{ width: 200 }}
          selectedKeys={[current]}
          mode="inline"
        >
          {html}
        </Menu>
      </div>
    );
  }
}
export default withRouter(ProMenu);
