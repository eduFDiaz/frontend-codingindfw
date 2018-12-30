import React, { Component } from 'react';
import SiteLayout from '../SiteLayout/SiteLayout';

import CategoryList from "../../components/Categories/CategoryList/CategoryList";
import PostsList from "../../components/Posts/PostList/PostList";

import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from '../Routes/Routes';

class App extends Component {
  render() {
    return (
      <Router>
      <SiteLayout>
          <BaseRouter />
      </SiteLayout>
      </Router>
    );
  }
}

export default App;