import React, {Component} from "react";
import Wrapper from "../../components/hoc/Wrapper/Wrapper";
import CategoryBuilder from "../../components/Categories/CategoryBuilder/CategoryBuilder";
import PostsBuilder from "../../components/Posts/PostsBuilder/PostsBuilder";

import 'antd/dist/antd.css';

import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class SiteLayout extends Component {
  render(){
    return <Wrapper>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
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
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}>
            <CategoryBuilder Url="http://localhost:8000/blog/api/categories/" />
            <PostsBuilder Url="http://localhost:8000/blog/api/posts/" />
        </Content>
          </Layout>
        </Layout>
      </Layout>
    </Wrapper>
  };
};
export default SiteLayout;
