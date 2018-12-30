import React, {Component} from 'react';
import Categories from '../Categories';
import axios from 'axios';
import MyLoader from '../../MyLoader/MyLoader';

export default class CategoryList extends Component{
    state = {
        content: [],
        loading: true,
      }
      
      componentDidMount() {
        //Fetching Categories
        axios.get(`${this.props.Url}`)
      .then(response => {
        this.setState({
          content: response.data.results,
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
            content = <MyLoader tip="Loading categories..." />
        }
        else{
            content = <Categories data={this.state.content}/>
        }
        return(
            {...content}
        );
    }
}