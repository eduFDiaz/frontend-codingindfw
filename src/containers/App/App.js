import React, { Component } from 'react';
import SiteLayout from '../SiteLayout/SiteLayout';

/* import CategoryList from "../../components/Categories/CategoryList/CategoryList";
import PostsList from "../../components/Posts/PostList/PostList"; */

import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from '../Routes/Routes';

import { connect } from 'react-redux'; //allow us to access some states from the store

import * as actions from '../../components/store/actions/auth';

class App extends Component {
  componentDidMount(){
    // Call dispatch onTryAutoSignup that will call actions.authCheckState
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <div>
        <Router>
          <SiteLayout {...this.props}>
            <BaseRouter />
          </SiteLayout>
        </Router>
      </div>
    );
  }
}

// we add state.token to props so it can
// be used inside layout later
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

// we add state.token to props so it can
// be used inside layout later
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);