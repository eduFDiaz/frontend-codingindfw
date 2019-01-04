import React, { Component } from 'react';
import Categories from '../Categories';
import axios from 'axios';
import MyLoader from '../../MyLoader/MyLoader';
import CustomForm from '../../Form/Form';

export default class CategoryList extends Component {
  state = {
    content: {},
    loading: true,
    Btnloading: false,
    BtnIconLoading: false,
  }
  
  enterLoading = () => {
    this.setState({ BtnLoading: true });
  }

  componentDidMount() {
    //Fetching Categories
    //const catID = this.props.match.params.catID;
    //console.log('[Category.js] ID=',catID);
    axios.get(`${this.props.Url}`)
      .then(response => {
        this.setState({
          content: response.data,
          loading: false
        });
        console.log(response);
        this.props.history.push('/categories/');
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    let content;
    if (this.state.loading) {
      content = <MyLoader tip="Loading categories..." />
    }
    else {
      content = <div>
        <Categories data={this.state.content} />
        <br />
        <h2>Create a new Category</h2>
        <CustomForm requestType='post'
          id={null}
          btnText="Create" />
      </div>
    }
    return (
      { ...content }
    );
  }
}