import React, {Component} from 'react';
import hljs from 'highlight.js';
import classes from 'highlight.js/styles/vs2015.css';
import Highlight from 'react-highlight';
import styles from './Post.css'

export default class Post extends Component{
    componentDidMount(){
    }
    render(){
        return(
            <div className={styles.Content} key={this.props.index}>
                <h1><a href={this.props.url}>{this.props.title}</a></h1>
                <p>{this.props.published_date}</p>
                <Highlight innerHTML={true}>{this.props.description}</Highlight>
                <Highlight innerHTML={true}>{this.props.text}</Highlight>
            </div>
        );
    }
}