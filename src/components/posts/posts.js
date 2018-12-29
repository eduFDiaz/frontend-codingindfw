import React, { Component } from 'react';
import Post from './Post/Post'

export default class Posts extends Component {
    render() {
        return this.props.Posts.map((post, index) => {
            return <Post 
            title={post.title}
            url={post.url}
            date={post.date}
            description={post.description}
            text={post.text}
            key={index}
            />
        });
    }
}