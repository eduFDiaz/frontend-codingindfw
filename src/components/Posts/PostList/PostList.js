import React, {Component} from 'react';
import Posts from '../Posts';
import axios from 'axios';
import MyLoader from '../../MyLoader/MyLoader';

export default class PostsList extends Component{
    state = {
        content: [],
        loading: true,
      }
      
      componentDidMount() {
        //Fetching Categories
        axios.get(`${this.props.Url}`)
      .then(response => {
        this.setState({
          content: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
      }
    render(){
        let content;
        if (this.state.loading){
            content = <MyLoader tip="Loading posts..." />
        }
        else{
            content = <Posts data={this.state.content}/>
        }
        return(
            {...content}
        );
    }
}