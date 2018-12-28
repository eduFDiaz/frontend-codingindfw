import React, {Component} from 'react';
import classes from './Category.css'

export default class Category extends Component{
    render(){
        return(
            <div className={classes.Category}>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <image src={this.props.imageSrc}></image>
                <a href={this.props.url}>{this.props.title}</a>
            </div>
        );
    }
}