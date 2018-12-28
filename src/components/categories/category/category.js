import React, {Component} from 'react';
import classes from './Category.css'

export default class Category extends Component{
    render(){
        return(
            <div className={classes.Category} key={this.props.index}>
                <img src={this.props.imageSrc}/>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}