import React, { Component } from 'react';
import DateBeautified from '../../components/DateBeautified/DateBeautified'
import MyLoader from '../../components/MyLoader/MyLoader'
import Post from './Post/Post'

export default class Posts extends Component {
    render() {
        return this.props.posts.map((post, index) => {
            return <Post 
            title={post.title}
            url={post.url}
            date={post.date}
            description={post.description}
            text={post.text}
            />
        });
    }
}
//{this.props.categories.map((category, index) => {}};