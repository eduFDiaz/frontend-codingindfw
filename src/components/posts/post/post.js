import React, {Component} from 'react';
import hljs from 'highlight.js';
import classes from 'highlight.js/styles/vs2015.css';

hljs.configure({useBR: false});

export default class Post extends Component{
    componentDidMount(){
        hljs.initHighlightingOnLoad();
    }
    render(){
        return(
            <div key={this.props.index}>
                <a href={this.props.url}>{this.props.title}</a>
                <p className={classes.hljs} dangerouslySetInnerHTML={{ __html: this.props.description }}></p>
                <div dangerouslySetInnerHTML={{ __html: this.props.text }}></div>
            </div>
        );
    }
}