import React, {Component} from 'react';
import axios from 'axios';
import Categories from '../categories'

{/* https://daveceddia.com/ajax-requests-in-react/ */}

export default class FetchData extends Component {
  state = {
    categories: [],
    posts: [],
    categoriesLoaded: false,
    postsLoaded: false
  }

  isDataDownloaded(){
      return (this.state.categoriesLoaded === true && this.state.postsLoaded === true);
  }
  
  componentDidMount() {
    //Fetching Categories
    console.log(`${this.props.url}${this.props.path}`);
    axios.get(`${this.props.categoriesUrl}`).then(res => {
      console.log(res.data);
      this.setState({
        categories: res.data.results,
        categoriesLoaded: true
      });
      console.log('state categories: ',this.state.categories);
    });
    //Fetching Posts
    axios.get(`${this.props.postsUrl}`).then(res => {
      console.log(res.data);
      this.setState({
        posts: res.data.results,
        postsLoaded: true
      });
      console.log('state posts: ',this.state.posts);
    });
  }
  
  render() {
    const categories = [...this.state.categories];
    const posts = [...this.state.posts];
    return (
      <div>
        <h1>{this.props.description}</h1>        
          {this.isDataDownloaded() ? <Categories /> : null}
      </div>
    );
  }
}