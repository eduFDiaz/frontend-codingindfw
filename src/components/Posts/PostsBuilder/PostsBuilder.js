import React, {Component} from 'react';
import Posts from '../Posts';
import axios from 'axios';

export default class PostsBuilder extends Component{
    state = {
        posts: [],
        PostsLoaded: false,
      }
    
      isDataDownloaded(){
          return (this.state.PostsLoaded === true);
      }
      
      componentDidMount() {
        //Fetching Posts
        axios.get(`${this.props.Url}`).then(res => {
          this.setState({
            posts: res.data.results,
            PostsLoaded: true
          });
        console.log(this.state.posts);
        });
      }
    render(){
        return(
            <Posts Posts={this.state.posts}/>
        );
    }
}