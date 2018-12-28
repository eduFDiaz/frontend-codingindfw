import React, {Component} from 'react';
import hljs from 'highlight.js';
import classes from 'highlight.js/styles/vs2015.css';
import Highlight from 'react-highlight';

export default class Post extends Component{
    componentDidMount(){
        /*hljs.configure({useBR: false});
        hljs.initHighlightingOnLoad();
        document.querySelector('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
          });*/
        //var code = document.querySelector('pre code');
        //console.log(code);

        //.each(function(i, block) {
         //   hljs.highlightBlock(block);
         // });
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