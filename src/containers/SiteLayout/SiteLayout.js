import React, { Component } from "react";
import Wrapper from "../../components/hoc/Wrapper/Wrapper";
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import * as actions from '../../components/store/actions/auth';

import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import axios from 'axios';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class SiteLayout extends Component {
  state = {
    content: [],
    loading: true,
  }
  componentDidMount(){
  var Url="http://localhost:8000/api/categories/";
  axios.get(`${Url}`)
      .then(response => {
        this.setState({
          content: response.data,
          loading: false
        });
        console.log('[componentDidMount] in Layout:', this.state.content);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return <Wrapper>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
            {
              this.props.isAuthenticated ?
                <Menu.Item key="3" onClick={this.props.logout}><Link to='/logout/'>Logout</Link></Menu.Item> :
                <Menu.Item key="3"><Link to='/login/'>Login</Link></Menu.Item>
            }
          </Menu>
        </Header>
        <Layout>
          <Sider breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => { console.log(broken); }}
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }} width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="database" />By Category</span>}>
              { this.state.loading ? <Menu.Item key="1">Loading...</Menu.Item> : 
              this.state.content.map((item, index) => {
                return <Menu.Item key={item.id}><Link to={`/bycategory/${item.id}`} key={item.id}>{item.title}</Link></Menu.Item>
                ;})
              }
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/categories">Categories</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/posts">Posts</Link></Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Wrapper>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default withRouter(connect(mapDispatchToProps)(SiteLayout));
