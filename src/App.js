import React, { Component } from 'react';
import './App.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import SiteLayout from './SiteLayout/SiteLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteLayout />
      </div>
    );
  }
}

export default App;