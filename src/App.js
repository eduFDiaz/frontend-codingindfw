import React, { Component } from 'react';
import './App.css';
import './FetchDemo/FetchDemo'

import FetchDemo from './FetchDemo/FetchDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Dont include a slash to close thr domain ex: url=http://localhost:8000/ */}
        <FetchDemo url="http://localhost:8000" path="/blog/api/posts/"/>
      </div>
    );
  }
}

export default App;