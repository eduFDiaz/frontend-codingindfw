import React, {Component} from 'react';
import Categories from '../Categories';
import axios from 'axios';
import Wrapper from '../../hoc/Wrapper/Wrapper';

export default class CategoryBuilder extends Component{
    state = {
        categories: [],
        categoriesLoaded: false,
      }
    
      isDataDownloaded(){
          return (this.state.categoriesLoaded === true);
      }
      
      componentDidMount() {
        //Fetching Categories
        axios.get(`${this.props.Url}`).then(res => {
          this.setState({
            categories: res.data.results,
            categoriesLoaded: true
          });
        console.log(this.state.categories);
        });
      }
    render(){
        return(
            <Categories Categories={this.state.categories}/>
        );
    }
}