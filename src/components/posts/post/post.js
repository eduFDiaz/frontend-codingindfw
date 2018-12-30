import React, {Component} from 'react';
import axios from 'axios';
import MyLoader from '../../MyLoader/MyLoader';
import { Card } from 'antd';
import Highlight from 'react-highlight';

export default class Post extends Component{
    state = {
        post: {},
        loading: true,
      }
      
      componentDidMount() {
        //Fetching Post
        const postID = this.props.match.params.postID;
        console.log('[Post.js] postID',`${postID}`);
        axios.get(`${this.props.Url}${postID}`)
      .then(response => {
        this.setState({
          post: response.data,
          loading: false
        });
        console.log(this.state.post);
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
            content = <Card title={this.state.post.title}>
                <h3><Highlight innerHTML={true}>{this.state.post.description}</Highlight></h3>
                <Highlight innerHTML={true}>{this.state.post.text}</Highlight>
            </Card>
            /* content = <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={content}
            footer={<div><b>ant design</b> footer part</div>}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={<Highlight innerHTML={true}>{item.description}</Highlight>}
                />
              </List.Item>
            )}
          /> */
        }
        return(
            {...content}
        );
    }
}