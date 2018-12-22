import React, { Component } from 'react';
import './App.css';
import './FetchDemo/FetchDemo'
import FetchDemo from './FetchDemo/FetchDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchDemo subreddit="django"/>
      </div>
    );
  }
}

export default App;