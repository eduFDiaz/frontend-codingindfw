import React, {Component} from 'react';
import hljs from 'highlight.js';
import classes from 'highlight.js/styles/vs2015.css';
import Highlight from 'react-highlight';

export default class Post extends Component{
    componentDidMount(){
    }
    render(){
        return(
            <div key={this.props.index}>
                <a href={this.props.url}>{this.props.title}</a>
                <p dangerouslySetInnerHTML={{ __html: this.props.description }}></p>
                <Highlight innerHTML={true}>{this.props.text}</Highlight>
            </div>
        );
    }
}