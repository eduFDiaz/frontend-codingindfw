import React, { Component } from 'react';
import SiteLayout from '../SiteLayout/SiteLayout';

class App extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css"></link>
        <SiteLayout />
      </div>
    );
  }
}

export default App;