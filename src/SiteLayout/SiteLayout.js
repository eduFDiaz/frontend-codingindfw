import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import './SiteLayout.css';
import FetchDemo from '../FetchDemo/FetchDemo';
import hljs from 'highlight.js/lib/highlight';
import cpp from 'highlight.js/lib/languages/cpp';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('cpp', cpp);

const { Header, Sider, Content } = Layout;

class SiteLayout extends Component{
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    
      render() {
        return (
          <Layout>
            <Sider
              breakpoint="lg"
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>nav 3</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content style={{
                margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
              }}
              >
                {/* Dont include a slash to close thr domain ex: url=http://localhost:8000/ */}
                <FetchDemo description="List of posts" url="http://localhost:8000" path="/blog/api/posts/"/>
              </Content>
            </Layout>
          </Layout>
        );
      }
};

export default SiteLayout;