import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import classes from './SiteLayout.css';
import FetchData from '../../components/FetchData/FetchData';
import hljs from 'highlight.js/lib/highlight';
import cpp from 'highlight.js/lib/languages/cpp';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('cpp', cpp);

const { Header, Sider, Content } = Layout;

class SiteLayout extends Component{
      render() {
        return (              
          <div>
                {/* Dont include a slash to close thr domain ex: url=http://localhost:8000/ */}
                <FetchData 
                description="Data" 
                categoriesUrl="http://localhost:8000/blog/api/categories/" 
                postsUrl="http://localhost:8000/blog/api/categories/"/>
          </div>
        );
      }
};

export default SiteLayout;