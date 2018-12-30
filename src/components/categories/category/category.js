import React, {Component} from 'react';
import axios from 'axios';
import MyLoader from '../../MyLoader/MyLoader';
import { Card } from 'antd';
import CustomForm from '../../Form/Form';
import Wrapper from '../../../components/hoc/Wrapper/Wrapper';

export default class Category extends Component{
    state = {
        post: {},
        loading: true,
      }
      
      componentDidMount() {
        //Fetching Post
        const catID = this.props.match.params.catID;
        axios.get(`${this.props.Url}${catID}`)
      .then(response => {
        this.setState({
          post: response.data,
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
            content = <MyLoader tip="Loading content..." />
        }
        else{
            content = <div>
                        <Card title={this.state.post.title}>
                            <p>{this.state.post.description}</p>
                        </Card><br></br>
                        <h2>Create a new Category</h2>
                        <CustomForm requestType='put'
                                    id={this.state.post.id}
                                    btnText="Update"/>
                      </div>
        }
        return(
            {...content}
        );
    }
}