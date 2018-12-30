import React, {Component} from 'react';
import Categories from '../Categories';
import axios from 'axios';
import MyLoader from '../../MyLoader/MyLoader';
import CustomForm from '../../Form/Form';

export default class CategoryList extends Component{
    state = {
        content: {},
        loading: true,
      }
      
      componentDidMount() {
        //Fetching Categories
        //const catID = this.props.match.params.catID;
        //console.log('[Category.js] ID=',catID);
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
            content = <div>
                        <Categories data={this.state.content}/>
                        <CustomForm requestType='post'
                                    id={null} 
                                    btnText="Create" />
                      </div>
        }
        return(
            {...content}
        );
    }
}