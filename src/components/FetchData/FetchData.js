import React, {Component} from 'react';
import axios from 'axios';
import Categories from '../Categories/Categories'
import Posts from '../Posts/Posts'
import MyLoader from '../MyLoader/MyLoader';

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
    axios.get(`${this.props.categoriesUrl}`).then(res => {
      this.setState({
        categories: res.data.results,
        categoriesLoaded: true
      });
    });
    //Fetching Posts
    axios.get(`${this.props.postsUrl}`).then(res => {
      this.setState({
        posts: res.data.results,
        postsLoaded: true
      });
    });
  }
  
  render() {
    const categories = [...this.state.categories];
    const posts = [...this.state.posts];
    console.log('[render categories]',categories);
    console.log('[render posts]',posts);
    return (
      <div>
        <h1>{this.props.description}</h1>        
          {this.isDataDownloaded() ? 
          <div>
            <Categories categories={categories}/>
            <Posts posts={posts}/>
          </div>
            : <MyLoader></MyLoader>}
      </div>
    );
  }
}